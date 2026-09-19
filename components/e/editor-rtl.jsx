import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knln1tbfv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knln1tbfv"/>`,
		"fallback": "dashicons:editor-rtl",
	});
}

export default Component;
