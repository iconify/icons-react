import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5433x7qc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i5433x7qc"/>`,
		"fallback": "lsicon:distribution-filled",
	});
}

export default Component;
