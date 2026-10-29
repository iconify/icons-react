import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/ker56obyj.css';
import '../../css/b/bqch6nb3d.css';
import '../../css/g/gxcr2mbxo.css';
import '../../css/g/g077gccan.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ker56obyj"/><path class="bqch6nb3d wm-a"/><path class="gxcr2mbxo wm-k"/><path class="g077gccan wm-a"/></g>`,
		"fallback": "withicons:file-question-sketch",
	});
}

export default Component;
