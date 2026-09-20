import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obwdk16ra.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obwdk16ra"/>`,
		"fallback": "streamline:computer-logo-google-media-google-social",
	});
}

export default Component;
