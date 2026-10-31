import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fed5n4npn.css';
import '../../css/v/vslz5yb3q.css';
import '../../css/g/ggatqdb-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="fed5n4npn wm-k"/><path class="vslz5yb3q wm-a"/><path class="ggatqdb-v wm-deco"/></g>`,
		"fallback": "withicons-kawaii:heading",
	});
}

export default Component;
