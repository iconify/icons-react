import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zvk8vqbhu.css';
import '../../css/t/tqg5t2iuz.css';
import '../../css/r/rs4b7ub-v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zvk8vqbhu"/><path clip-rule="evenodd" class="tqg5t2iuz"/><path class="rs4b7ub-v"/></g>`,
		"fallback": "glyphs:cog-outline",
	});
}

export default Component;
