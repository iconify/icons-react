import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewhk_6ffn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewhk_6ffn"/>`,
		"fallback": "noviair-light:bike",
	});
}

export default Component;
