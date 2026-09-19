import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fr8kns7oi.css';
import '../../css/x/xmx6tf11i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fr8kns7oi"/><path class="xmx6tf11i"/></g>`,
		"fallback": "glyphs:box-duo",
	});
}

export default Component;
