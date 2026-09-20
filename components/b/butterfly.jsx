import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjp3d4bta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjp3d4bta"/>`,
		"fallback": "mdi:butterfly",
	});
}

export default Component;
