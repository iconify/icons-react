import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw2-sdm9g.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw2-sdm9g"/>`,
		"fallback": "f7:arrowtriangle-right-fill",
	});
}

export default Component;
