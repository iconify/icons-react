import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fiyl0jqdl.css';
import '../../css/i/i-8mglydi.css';
import '../../css/k/kt5u6m9fg.css';
import '../../css/i/i1mwrf8fx.css';
import '../../css/v/v-gcjbche.css';
import '../../css/s/sk6glgb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fiyl0jqdl wm-shadow"/><path class="i-8mglydi"/><path class="kt5u6m9fg"/><path class="i1mwrf8fx"/><path class="v-gcjbche"/><path class="sk6glgb6a"/></g>`,
		"fallback": "withicons-retro:flask-conical",
	});
}

export default Component;
