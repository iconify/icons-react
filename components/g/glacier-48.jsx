import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-y9qh32h.css';
import '../../css/z/zcvqqxblp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-y9qh32h"/><path class="zcvqqxblp"/>`,
		"fallback": "energy-icons:glacier-48",
	});
}

export default Component;
