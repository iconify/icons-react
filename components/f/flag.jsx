import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haor4_unv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="haor4_unv"/>`,
		"fallback": "pajamas:flag",
	});
}

export default Component;
