import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyrjo7r-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyrjo7r-x"/>`,
		"fallback": "lets-icons:dimond-alt",
	});
}

export default Component;
