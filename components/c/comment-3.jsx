import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n9m870bof.css';
import '../../css/g/go72okfmy.css';
import '../../css/n/nbj4kcceg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n9m870bof"/><path class="go72okfmy"/><rect class="nbj4kcceg"/></g>`,
		"fallback": "glyphs-poly:comment-3",
	});
}

export default Component;
