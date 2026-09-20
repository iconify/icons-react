import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eujum-5uo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eujum-5uo"/>`,
		"fallback": "teenyicons:border-inner-outline",
	});
}

export default Component;
