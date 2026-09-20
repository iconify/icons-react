import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vfy9zwu-h.css';
import '../../css/l/lpykjbbqg.css';
import '../../css/d/debnu0bfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vfy9zwu-h"/><path class="lpykjbbqg"/><path class="debnu0bfa"/></g>`,
		"fallback": "keyline-icons:file-off-two-tone",
	});
}

export default Component;
