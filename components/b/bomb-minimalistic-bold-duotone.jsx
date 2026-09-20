import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/ztznpjbdp.css';
import '../../css/q/qo1nakb9i.css';
import '../../css/h/htfsjpb9r.css';
import '../../css/e/emv-fpbxm.css';
import '../../css/f/fcbfp7bko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ztznpjbdp"/><path class="qo1nakb9i"/><path class="htfsjpb9r"/><path class="emv-fpbxm"/><path class="fcbfp7bko"/></g>`,
		"fallback": "solar:bomb-minimalistic-bold-duotone",
	});
}

export default Component;
