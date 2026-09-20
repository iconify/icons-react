import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew969ac-z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew969ac-z"/>`,
		"fallback": "ix:ingestion-report",
	});
}

export default Component;
