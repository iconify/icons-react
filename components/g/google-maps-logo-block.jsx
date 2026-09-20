import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kogkj5uzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kogkj5uzz"/>`,
		"fallback": "streamline-logos:google-maps-logo-block",
	});
}

export default Component;
