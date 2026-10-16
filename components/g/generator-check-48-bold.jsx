import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/koz4nrgjs.css';
import '../../css/s/st5lvs5dl.css';
import '../../css/y/y9mg2tbzu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="koz4nrgjs"/><path class="st5lvs5dl"/><path class="y9mg2tbzu"/>`,
		"fallback": "energy-icons:generator-check-48-bold",
	});
}

export default Component;
