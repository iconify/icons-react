import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a4opz1bbj.css';
import '../../css/g/g1fovbbcq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="a4opz1bbj"/><path class="g1fovbbcq"/></g>`,
		"fallback": "ix:hexagon-vertical-bars-database-filled",
	});
}

export default Component;
