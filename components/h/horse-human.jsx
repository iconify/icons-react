import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwe_38duk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwe_38duk"/>`,
		"fallback": "mdi:horse-human",
	});
}

export default Component;
