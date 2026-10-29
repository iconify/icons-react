import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bh88hfbbl.css';
import '../../css/l/l4vlz4b-i.css';
import '../../css/j/jnbx89z3f.css';
import '../../css/p/pnwuy2ujo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bh88hfbbl"/><path class="l4vlz4b-i wm-a"/><path class="jnbx89z3f"/><path class="pnwuy2ujo wm-a"/></g>`,
		"fallback": "withicons:file-input-duo",
	});
}

export default Component;
