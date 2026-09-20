import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmkk7pd3f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmkk7pd3f"/>`,
		"fallback": "teenyicons:align-center-horizontal-solid",
	});
}

export default Component;
