import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqb-96wwp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqb-96wwp"/>`,
		"fallback": "pinhead:bicycle-and-shekel",
	});
}

export default Component;
