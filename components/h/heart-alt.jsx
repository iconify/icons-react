import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/capx64hcy.css';

const viewBox = {"width":28,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="capx64hcy"/>`,
		"fallback": "fontisto:heart-alt",
	});
}

export default Component;
