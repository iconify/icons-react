import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1fmgbb9l.css';
import '../../css/j/jp007tmga.css';
import '../../css/y/yiyfahk2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1fmgbb9l"/><path class="jp007tmga"/><path class="yiyfahk2p"/>`,
		"fallback": "streamline-freehand:cd-rom-burn",
	});
}

export default Component;
