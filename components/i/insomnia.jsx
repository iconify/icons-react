import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrl5tih3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrl5tih3s"/>`,
		"fallback": "simple-icons:insomnia",
	});
}

export default Component;
