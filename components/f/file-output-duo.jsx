import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8uix_bml.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n116j5v7v.css';
import '../../css/g/g2ncgwkcx.css';
import '../../css/d/dpfql9v-g.css';
import '../../css/k/k515a3n2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8uix_bml secondary"/><g class="dt0cm9dhy primary"><path class="n116j5v7v"/><path class="g2ncgwkcx"/><path class="dpfql9v-g"/><path class="k515a3n2r"/></g>`,
		"fallback": "iconaut:file-output-duo",
	});
}

export default Component;
