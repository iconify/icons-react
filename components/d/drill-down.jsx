import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oodzlwb8f.css';
import '../../css/o/ou77jgbpx.css';
import '../../css/c/c18fbur1q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oodzlwb8f"/><path class="ou77jgbpx"/><path class="c18fbur1q"/>`,
		"fallback": "carbon:drill-down",
	});
}

export default Component;
