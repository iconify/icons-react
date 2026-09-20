import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk9d9xbur.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk9d9xbur"/>`,
		"fallback": "jam:folder-zip-f",
	});
}

export default Component;
