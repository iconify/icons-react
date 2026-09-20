import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs83cbbpj.css';
import '../../css/x/xe_mok4yw.css';
import '../../css/t/tyubjgq6r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hs83cbbpj"><path class="xe_mok4yw"/><path class="tyubjgq6r"/></g>`,
		"fallback": "lsicon:camera-outline",
	});
}

export default Component;
