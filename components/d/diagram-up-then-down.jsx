import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmo9ppb1i.css';
import '../../css/j/jlv4cgy0n.css';
import '../../css/b/bpsgf019b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lmo9ppb1i"><path class="jlv4cgy0n"/><path class="bpsgf019b"/></g>`,
		"fallback": "streamline-ultimate-color:diagram-up-then-down",
	});
}

export default Component;
