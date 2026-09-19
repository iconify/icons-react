import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4v10i-vq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i4v10i-vq"/>`,
		"fallback": "healthicons:cochlear-implant-outline",
	});
}

export default Component;
