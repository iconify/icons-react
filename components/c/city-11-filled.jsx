import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/siiur0snn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="siiur0snn"/>`,
		"fallback": "tdesign:city-11-filled",
	});
}

export default Component;
