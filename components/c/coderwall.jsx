import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvpp2bcjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvpp2bcjw"/>`,
		"fallback": "simple-icons:coderwall",
	});
}

export default Component;
