import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md39-n46g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="md39-n46g"/>`,
		"fallback": "keyline-icons:dice-3-sharp-fill",
	});
}

export default Component;
