import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/oegdcpb8g.css';
import '../../css/s/s6psnnbok.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/g/gpq9r4b5a.css';
import '../../css/i/i1s4z8blu.css';
import '../../css/p/p98w3epti.css';
import '../../css/c/c5oow0bqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="oegdcpb8g wm-deco"/><path class="s6psnnbok wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="gpq9r4b5a wm-k"/><path class="i1s4z8blu wm-a"/><path class="p98w3epti wm-s"/><path class="c5oow0bqk wm-k"/></g>`,
		"fallback": "withicons:haunted-house-blueprint",
	});
}

export default Component;
