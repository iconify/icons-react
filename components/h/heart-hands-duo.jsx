import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vigo633vd.css';
import '../../css/i/ie7387b1v.css';
import '../../css/u/un3wu1fqw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vigo633vd"/><path class="ie7387b1v"/><path class="un3wu1fqw"/></g>`,
		"fallback": "glyphs:heart-hands-duo",
	});
}

export default Component;
