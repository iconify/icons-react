import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o80r8jpae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o80r8jpae"/>`,
		"fallback": "thesvg-color:ab-download-manager",
	});
}

export default Component;
