import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f4lfqelzl.css';
import '../../css/v/vncdglbxf.css';
import '../../css/d/dj6hz0ywu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="f4lfqelzl"/><path class="vncdglbxf"/><path class="dj6hz0ywu"/></g>`,
		"fallback": "hugeicons:align-key-object",
	});
}

export default Component;
