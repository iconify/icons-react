import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz66qlb_c.css';

const viewBox = {"width":466,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz66qlb_c"/>`,
		"fallback": "file-icons:bithound",
	});
}

export default Component;
