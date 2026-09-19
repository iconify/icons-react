import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hfb1keruk.css';
import '../../css/q/qbp87iz6c.css';
import '../../css/a/aawgr-bgi.css';
import '../../css/z/z_83elbqf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="hfb1keruk"/><path class="qbp87iz6c"/><path class="aawgr-bgi"/><path class="z_83elbqf"/></g>`,
		"fallback": "catppuccin:folder-intellij",
	});
}

export default Component;
