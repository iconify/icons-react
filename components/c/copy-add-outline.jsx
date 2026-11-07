import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od8vdsbvc.css';
import '../../css/e/egvbavgae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od8vdsbvc"/><path clip-rule="evenodd" class="egvbavgae"/>`,
		"fallback": "solar:copy-add-outline",
	});
}

export default Component;
