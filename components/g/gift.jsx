import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/etur1zaih.css';
import '../../css/i/izd4_2bep.css';
import '../../css/a/a56m5f6ka.css';
import '../../css/w/wrxz1_bof.css';
import '../../css/s/sokdlbgtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="etur1zaih"/><path class="izd4_2bep"/><path class="a56m5f6ka"/><path class="wrxz1_bof"/><path class="sokdlbgtm"/></g>`,
		"fallback": "matita:gift",
	});
}

export default Component;
