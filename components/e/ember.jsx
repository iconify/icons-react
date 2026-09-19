import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn4yg_1oe.css';
import '../../css/l/lsp0zwf3k.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn4yg_1oe"/><path class="lsp0zwf3k"/>`,
		"fallback": "devicon:ember",
	});
}

export default Component;
