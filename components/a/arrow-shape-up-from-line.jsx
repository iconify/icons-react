import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iin1znbca.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iin1znbca"/>`,
		"fallback": "gravity-ui:arrow-shape-up-from-line",
	});
}

export default Component;
