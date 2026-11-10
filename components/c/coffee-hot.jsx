import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nenha0l3e.css';
import '../../css/h/h1azbdb_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nenha0l3e"/><path class="h1azbdb_g"/></g>`,
		"fallback": "proicons:coffee-hot",
	});
}

export default Component;
