import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jp-e3rbsw.css';
import '../../css/t/t24ymlb2t.css';
import '../../css/i/ihhlg4bgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jp-e3rbsw"/><path class="t24ymlb2t"/><path class="ihhlg4bgm"/></g>`,
		"fallback": "andrsrxn:field-sparkle",
	});
}

export default Component;
