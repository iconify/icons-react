import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si4c_jo9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si4c_jo9v"/>`,
		"fallback": "withicons:heading-gloss",
	});
}

export default Component;
