import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o0z66u04y.css';
import '../../css/p/ppta7nblo.css';
import '../../css/x/xqmsk0-rl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o0z66u04y"/><path class="ppta7nblo"/><path class="xqmsk0-rl"/></g>`,
		"fallback": "glyphs:house-flood-duo",
	});
}

export default Component;
