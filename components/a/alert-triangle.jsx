import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tt03q571o.css';
import '../../css/i/ipt2rs9_u.css';
import '../../css/f/fjfxbcigs.css';
import '../../css/b/bur5g6bex.css';
import '../../css/j/joy4npahl.css';
import '../../css/t/tyu9-348q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="tt03q571o wm-shadow"/><path class="ipt2rs9_u"/><path class="fjfxbcigs"/><path class="bur5g6bex"/><path class="joy4npahl wm-shine"/><path class="tyu9-348q wm-deco"/></g>`,
		"fallback": "withicons-sticker:alert-triangle",
	});
}

export default Component;
