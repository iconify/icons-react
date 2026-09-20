import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuedu7c-d.css';
import '../../css/m/mf98adcos.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuedu7c-d"/><path class="mf98adcos"/>`,
		"fallback": "lineicons:cross-circle",
	});
}

export default Component;
