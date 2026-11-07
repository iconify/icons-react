import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph-lyk__x.css';
import '../../css/y/ybkhrgori.css';
import '../../css/n/n_7s633jr.css';
import '../../css/o/onh9oyipx.css';
import '../../css/m/mgjb77b4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph-lyk__x"/><path class="ybkhrgori"/><path class="n_7s633jr"/><path class="onh9oyipx"/><path class="mgjb77b4m"/>`,
		"fallback": "solar:cloud-storm-outline",
	});
}

export default Component;
