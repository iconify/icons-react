import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvpgfle6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvpgfle6k"/>`,
		"fallback": "lineicons:firework-rocket-4",
	});
}

export default Component;
