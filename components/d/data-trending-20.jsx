import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dqmxqo14r.css';
import '../../css/u/u6k12bcxm.css';
import '../../css/o/ol7cejbxg.css';
import '../../css/b/bxegrmbjp.css';
import '../../css/x/xowgfxbjw.css';
import '../../css/t/tt8br1bqq.css';
import '../../css/d/dybrcqbqj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVG7GXFJbZg)" class="dqmxqo14r"/><path fill="url(#SVGtFhs2chS)" class="u6k12bcxm"/><defs><linearGradient id="SVG7GXFJbZg" x1="4" x2="22" y1="12.5" y2="6" gradientUnits="userSpaceOnUse"><stop class="ol7cejbxg"/><stop offset=".445" class="bxegrmbjp"/><stop offset=".957" class="xowgfxbjw"/></linearGradient><linearGradient id="SVGtFhs2chS" x1="16.5" x2="2.498" y1="3" y2="23.849" gradientUnits="userSpaceOnUse"><stop class="tt8br1bqq"/><stop offset="1" class="dybrcqbqj"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:data-trending-20",
	});
}

export default Component;
