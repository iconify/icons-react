import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hewys-vhp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hewys-vhp"/>`,
		"fallback": "pajamas:chevron-lg-left",
	});
}

export default Component;
