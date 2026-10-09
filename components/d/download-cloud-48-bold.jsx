import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbb-tygif.css';
import '../../css/i/iry5se_sq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbb-tygif"/><path class="iry5se_sq"/>`,
		"fallback": "energy-icons:download-cloud-48-bold",
	});
}

export default Component;
