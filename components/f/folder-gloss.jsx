import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhw4n-zri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhw4n-zri"/>`,
		"fallback": "withicons:folder-gloss",
	});
}

export default Component;
