import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj39tft-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj39tft-r"/>`,
		"fallback": "keyline-icons:git-connection-sharp",
	});
}

export default Component;
