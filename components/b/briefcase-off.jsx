import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d-8a31bcn.css';
import '../../css/g/grfufzbzd.css';
import '../../css/m/mnmuvybeq.css';
import '../../css/u/ubz6qzllx.css';
import '../../css/l/lneulqb-i.css';
import '../../css/t/tebe3hblw.css';
import '../../css/p/plzikndyt.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d-8a31bcn"/><path clip-rule="evenodd" class="grfufzbzd"/><path clip-rule="evenodd" class="mnmuvybeq"/><path class="ubz6qzllx"/><path clip-rule="evenodd" class="lneulqb-i"/><path class="tebe3hblw"/><path clip-rule="evenodd" class="plzikndyt"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:briefcase-off",
	});
}

export default Component;
