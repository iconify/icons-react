import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urb3frbfc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="urb3frbfc"/>`,
		"fallback": "pajamas:car",
	});
}

export default Component;
