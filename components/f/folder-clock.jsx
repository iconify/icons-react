import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-muoxxvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-muoxxvy"/>`,
		"fallback": "noviair-light:folder-clock",
	});
}

export default Component;
