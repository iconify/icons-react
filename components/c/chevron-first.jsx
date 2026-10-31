import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/r/rsxux02nf.css';
import '../../css/c/chfexdi1f.css';
import '../../css/b/besqxsfvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="rsxux02nf wm-k"/><path class="chfexdi1f wm-a"/><path class="besqxsfvw wm-deco"/></g>`,
		"fallback": "withicons-kawaii:chevron-first",
	});
}

export default Component;
