import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdagnjbde.css';
import '../../css/w/wjgo_ebim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdagnjbde"/><path class="wjgo_ebim"/>`,
		"fallback": "prime:cog",
	});
}

export default Component;
