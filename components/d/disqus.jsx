import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3j_08rws.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3j_08rws"/>`,
		"fallback": "fontisto:disqus",
	});
}

export default Component;
