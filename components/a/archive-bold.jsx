import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dquz6tbqg.css';
import '../../css/z/z4mywv58p.css';
import '../../css/x/x2chlabpl.css';
import '../../css/o/o0byzbpda.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dquz6tbqg"/><path clip-rule="evenodd" class="z4mywv58p"/><path class="x2chlabpl"/><path clip-rule="evenodd" class="o0byzbpda"/></g>`,
		"fallback": "glyphs:archive-bold",
	});
}

export default Component;
