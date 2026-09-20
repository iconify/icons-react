import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s88_b-8zu.css';
import '../../css/j/jjbqhzpum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s88_b-8zu"/><path class="jjbqhzpum"/>`,
		"fallback": "si:add-to-library-fill",
	});
}

export default Component;
