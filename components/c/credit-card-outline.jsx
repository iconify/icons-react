import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjvum3bja.css';
import '../../css/r/rs8zu5blz.css';
import '../../css/c/czg5n3blq.css';
import '../../css/n/nmfipnb4g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rjvum3bja"/><path clip-rule="evenodd" class="rs8zu5blz"/><path class="czg5n3blq"/><path clip-rule="evenodd" class="nmfipnb4g"/></g>`,
		"fallback": "glyphs:credit-card-outline",
	});
}

export default Component;
