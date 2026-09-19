import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dncihhclw.css';
import '../../css/a/a2k6oubdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dncihhclw"/><path class="a2k6oubdw"/>`,
		"fallback": "boxicons:arrow-in-up-right-stroke-circle-filled",
	});
}

export default Component;
