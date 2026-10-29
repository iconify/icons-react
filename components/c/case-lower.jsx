import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qmu73w4wj.css';
import '../../css/z/zvpct9b4g.css';
import '../../css/p/p2-artbdi.css';
import '../../css/g/gurxiwbrg.css';
import '../../css/w/wy543bc4c.css';
import '../../css/x/xkzbfq_8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="qmu73w4wj wm-shadow"/><path class="zvpct9b4g"/><path class="p2-artbdi"/><path class="gurxiwbrg"/><path class="wm-shine wy543bc4c"/><path class="wm-deco xkzbfq_8i"/></g>`,
		"fallback": "withicons-sticker:case-lower",
	});
}

export default Component;
