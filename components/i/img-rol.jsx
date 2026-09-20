import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/v/v_vhlcbpc.css';
import '../../css/b/b5p0nplan.css';
import '../../css/m/m4i9sshhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="v_vhlcbpc"/><path class="b5p0nplan"/><path class="m4i9sshhm"/></g>`,
		"fallback": "lets-icons:img-rol",
	});
}

export default Component;
