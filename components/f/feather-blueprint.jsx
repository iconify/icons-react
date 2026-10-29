import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/h_9cw8blr.css';
import '../../css/s/s70azwfgp.css';
import '../../css/l/lz6_xsb3e.css';
import '../../css/z/zyufdlbep.css';
import '../../css/s/s_azesqtz.css';
import '../../css/c/cuf_7w-0z.css';
import '../../css/t/td333acim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="h_9cw8blr wm-deco"/><path class="s70azwfgp wm-deco"/><path class="lz6_xsb3e wm-deco"/><path class="wm-k zyufdlbep"/><path class="s_azesqtz wm-a"/><path class="cuf_7w-0z wm-k"/><path class="td333acim wm-a"/></g>`,
		"fallback": "withicons:feather-blueprint",
	});
}

export default Component;
