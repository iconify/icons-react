import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tun7kpbmr.css';
import '../../css/a/a2uaf5emu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary tun7kpbmr"/><path class="a2uaf5emu primary"/>`,
		"fallback": "iconaut:folder-duo",
	});
}

export default Component;
