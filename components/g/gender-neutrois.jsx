import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fugyre1oo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fugyre1oo"/>`,
		"fallback": "tabler:gender-neutrois",
	});
}

export default Component;
