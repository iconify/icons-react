import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it_hfactd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it_hfactd"/>`,
		"fallback": "rivet-icons:close-circle-solid",
	});
}

export default Component;
