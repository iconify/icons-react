import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf1q-jbnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf1q-jbnc"/>`,
		"fallback": "mdi:image-marker",
	});
}

export default Component;
