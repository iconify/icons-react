import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7ns0-bth.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7ns0-bth"/>`,
		"fallback": "f7:doc-person",
	});
}

export default Component;
