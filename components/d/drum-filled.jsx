import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7o7vzk5e.css';
import '../../css/j/j-89n_bzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7o7vzk5e"/><path class="j-89n_bzw"/>`,
		"fallback": "lucide-extended:drum-filled",
	});
}

export default Component;
