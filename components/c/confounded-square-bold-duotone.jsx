import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn_frcb-c.css';
import '../../css/b/bjuz8i9vl.css';
import '../../css/w/w8znvab1d.css';
import '../../css/a/a5xq_ybez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn_frcb-c"/><path class="bjuz8i9vl"/><path class="w8znvab1d"/><path class="a5xq_ybez"/>`,
		"fallback": "solar:confounded-square-bold-duotone",
	});
}

export default Component;
