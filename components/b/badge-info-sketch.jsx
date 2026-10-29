import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jzg8wibto.css';
import '../../css/n/nicx5qbaa.css';
import '../../css/g/gsir-ngtt.css';
import '../../css/m/mza_43bcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jzg8wibto"/><path class="nicx5qbaa wm-a"/><path class="gsir-ngtt wm-k"/><path class="mza_43bcq wm-a"/></g>`,
		"fallback": "withicons:badge-info-sketch",
	});
}

export default Component;
