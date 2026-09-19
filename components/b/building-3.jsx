import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/h/h7cylubiz.css';
import '../../css/k/kqn2r7evb.css';
import '../../css/d/dpqsedb_j.css';
import '../../css/n/nok0fdb-s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="h7cylubiz"/><path class="kqn2r7evb"/><path class="dpqsedb_j"/><path class="nok0fdb-s"/></g>`,
		"fallback": "glyphs-poly:building-3",
	});
}

export default Component;
