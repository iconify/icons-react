import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9j8wga2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s9j8wga2m"/>`,
		"fallback": "keyline-icons:cloud-alert-sharp-fill",
	});
}

export default Component;
