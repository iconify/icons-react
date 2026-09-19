import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ijqz56wxk.css';
import '../../css/g/gw9e2jbsa.css';
import '../../css/f/foeim5b7u.css';
import '../../css/j/jrsma9byt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ijqz56wxk"/><path class="gw9e2jbsa"/><path clip-rule="evenodd" class="foeim5b7u"/><path class="jrsma9byt"/></g>`,
		"fallback": "glyphs:bell-add-outline",
	});
}

export default Component;
