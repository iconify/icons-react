import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jygy7jq_q.css';
import '../../css/d/db0zvdh4p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jygy7jq_q"/><path class="db0zvdh4p"/></g>`,
		"fallback": "glyphs:building-1",
	});
}

export default Component;
