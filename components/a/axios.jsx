import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd8nq5kls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd8nq5kls"/>`,
		"fallback": "simple-icons:axios",
	});
}

export default Component;
