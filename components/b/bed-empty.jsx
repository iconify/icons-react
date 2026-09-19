import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bboyc8n1g.css';
import '../../css/p/p3hvddcql.css';
import '../../css/r/rgcaz9bqd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="bboyc8n1g"/><path class="p3hvddcql"/><path class="rgcaz9bqd"/></g>`,
		"fallback": "glyphs-poly:bed-empty",
	});
}

export default Component;
