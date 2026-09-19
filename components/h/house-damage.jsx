import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uzhlr9ged.css';
import '../../css/z/zwc8jr9-g.css';
import '../../css/t/tv0rkbbvi.css';
import '../../css/j/j78wzibyw.css';
import '../../css/a/aez4t7x4v.css';
import '../../css/m/mgz6l8bai.css';
import '../../css/z/z7emv6bof.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uzhlr9ged"/><path class="zwc8jr9-g"/><path class="tv0rkbbvi"/><path clip-rule="evenodd" class="j78wzibyw"/><path class="aez4t7x4v"/><path clip-rule="evenodd" class="mgz6l8bai"/><path class="z7emv6bof"/></g>`,
		"fallback": "glyphs-poly:house-damage",
	});
}

export default Component;
