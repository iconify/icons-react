import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvamu-4ox.css';
import '../../css/c/c_eh8tc1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvamu-4ox"/><path clip-rule="evenodd" class="c_eh8tc1z"/>`,
		"fallback": "solar:crown-line-outline",
	});
}

export default Component;
