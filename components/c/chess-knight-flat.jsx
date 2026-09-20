import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fhn12jz8i.css';
import '../../css/d/dlkgg4zpw.css';
import '../../css/c/c29b-_v0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fhn12jz8i"/><path class="dlkgg4zpw"/><path clip-rule="evenodd" class="c29b-_v0n"/></g>`,
		"fallback": "streamline-sharp-color:chess-knight-flat",
	});
}

export default Component;
