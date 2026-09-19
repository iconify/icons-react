import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqsh3o3jo.css';
import '../../css/e/e2-a4zbar.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqsh3o3jo"/><path clip-rule="evenodd" class="e2-a4zbar"/>`,
		"fallback": "heroicons:cpu-chip-16-solid",
	});
}

export default Component;
