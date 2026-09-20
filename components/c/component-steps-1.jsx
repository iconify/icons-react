import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gga6pngkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gga6pngkl"/>`,
		"fallback": "tdesign:component-steps-1",
	});
}

export default Component;
