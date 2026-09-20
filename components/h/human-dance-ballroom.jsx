import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ervzmi7kn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ervzmi7kn"/>`,
		"fallback": "mdi:human-dance-ballroom",
	});
}

export default Component;
