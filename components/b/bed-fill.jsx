import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9_yt-30p.css';
import '../../css/p/pexua2j3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s9_yt-30p"/><path clip-rule="evenodd" class="pexua2j3v"/>`,
		"fallback": "mingcute:bed-fill",
	});
}

export default Component;
