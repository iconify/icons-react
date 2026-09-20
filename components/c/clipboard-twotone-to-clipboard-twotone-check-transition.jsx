import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvpq1a96t.css';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z3cinacmg.css';
import '../../css/c/cj9p02boh.css';
import '../../css/i/i1hblpbwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvpq1a96t"/><g class="y9tr6bcfx"><path class="z3cinacmg"/><path class="cj9p02boh"/><path class="i1hblpbwq"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="12;0"/></path></g>`,
		"fallback": "line-md:clipboard-twotone-to-clipboard-twotone-check-transition",
	});
}

export default Component;
