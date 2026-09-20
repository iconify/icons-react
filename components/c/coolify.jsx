import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v12d60_ju.css';
import '../../css/e/e29tvgbxj.css';
import '../../css/q/qdaqy6blz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v12d60_ju"/><path class="e29tvgbxj"/><path class="qdaqy6blz"/>`,
		"fallback": "selfhst:coolify",
	});
}

export default Component;
