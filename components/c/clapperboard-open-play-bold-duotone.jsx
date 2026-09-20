import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x8kxd3r3a.css';
import '../../css/n/nr1jxib6k.css';
import '../../css/c/cqmrw01nf.css';
import '../../css/z/zud47abkq.css';
import '../../css/v/v5zwtibtk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x8kxd3r3a"/><path class="nr1jxib6k"/><path class="cqmrw01nf"/><path class="zud47abkq"/><path class="v5zwtibtk"/></g>`,
		"fallback": "solar:clapperboard-open-play-bold-duotone",
	});
}

export default Component;
