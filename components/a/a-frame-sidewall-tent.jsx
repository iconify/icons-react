import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqh81ubec.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqh81ubec"/>`,
		"fallback": "pinhead:a-frame-sidewall-tent",
	});
}

export default Component;
