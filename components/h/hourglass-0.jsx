import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lbqz0xbia.css';
import '../../css/a/aqdcgn30f.css';
import '../../css/s/sikw3pb2u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lbqz0xbia"/><path class="aqdcgn30f"/><path clip-rule="evenodd" class="sikw3pb2u"/></g>`,
		"fallback": "glyphs-poly:hourglass-0",
	});
}

export default Component;
