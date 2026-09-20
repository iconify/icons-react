import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd4nsybqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd4nsybqy"/>`,
		"fallback": "keyline-icons:cable-sharp",
	});
}

export default Component;
