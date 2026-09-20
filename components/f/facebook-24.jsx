import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyr05pb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pyr05pb4f"/>`,
		"fallback": "qlementine-icons:facebook-24",
	});
}

export default Component;
