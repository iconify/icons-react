import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq2-ldpak.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nq2-ldpak"/>`,
		"fallback": "healthicons:biochemistry-laboratory",
	});
}

export default Component;
