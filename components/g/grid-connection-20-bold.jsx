import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhdjjfm6r.css';
import '../../css/z/z6gs6rvum.css';
import '../../css/v/v-y_tpdhw.css';
import '../../css/m/m-4kgcb5p.css';
import '../../css/y/y35vapb1y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhdjjfm6r"/><path class="z6gs6rvum"/><path class="v-y_tpdhw"/><path class="m-4kgcb5p"/><path class="y35vapb1y"/>`,
		"fallback": "energy-icons:grid-connection-20-bold",
	});
}

export default Component;
