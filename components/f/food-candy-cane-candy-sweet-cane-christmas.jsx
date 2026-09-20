import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt57uhpgx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt57uhpgx"/>`,
		"fallback": "streamline:food-candy-cane-candy-sweet-cane-christmas",
	});
}

export default Component;
