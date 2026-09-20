import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kod3i7btx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kod3i7btx"/>`,
		"fallback": "nrk:dice-5-active",
	});
}

export default Component;
