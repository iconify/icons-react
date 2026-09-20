import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2voyuaco.css';
import '../../css/l/li0xiwdxq.css';
import '../../css/n/npys77r9r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v2voyuaco"/><path class="li0xiwdxq"/><path class="npys77r9r"/></g>`,
		"fallback": "streamline-color:graph-bar-increase",
	});
}

export default Component;
