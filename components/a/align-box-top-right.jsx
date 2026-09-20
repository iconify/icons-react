import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/daefol3mg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="daefol3mg"/>`,
		"fallback": "tabler:align-box-top-right",
	});
}

export default Component;
