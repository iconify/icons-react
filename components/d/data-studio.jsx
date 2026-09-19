import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_itg_6tc.css';
import '../../css/q/qnri0obgq.css';
import '../../css/o/o1mn00bak.css';
import '../../css/m/mknykge_c.css';
import '../../css/c/cc1dc3bjk.css';
import '../../css/m/m-ah6rc5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_itg_6tc"/><circle class="qnri0obgq"/><path class="o1mn00bak"/><circle class="mknykge_c"/><path class="cc1dc3bjk"/><circle class="m-ah6rc5c"/>`,
		"fallback": "gcp:data-studio",
	});
}

export default Component;
