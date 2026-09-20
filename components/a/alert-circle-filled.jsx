import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmvxyxxog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bmvxyxxog"/>`,
		"fallback": "reicon:alert-circle-filled",
	});
}

export default Component;
