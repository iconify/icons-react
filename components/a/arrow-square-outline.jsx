import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ijc771bml.css';
import '../../css/t/tjevbdcod.css';
import '../../css/v/vbu5lbs7n.css';
import '../../css/x/x8fnyzbyf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ijc771bml"/><path clip-rule="evenodd" class="tjevbdcod"/><path class="vbu5lbs7n"/><path clip-rule="evenodd" class="x8fnyzbyf"/></g>`,
		"fallback": "glyphs:arrow-square-outline",
	});
}

export default Component;
