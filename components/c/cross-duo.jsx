import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qnr65ebsv.css';
import '../../css/w/wwv3oqbzd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qnr65ebsv"/><path class="wwv3oqbzd"/></g>`,
		"fallback": "glyphs:cross-duo",
	});
}

export default Component;
