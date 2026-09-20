import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx2ml4aqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx2ml4aqk"/>`,
		"fallback": "streamline-ultimate-color:arrow-button-right-1",
	});
}

export default Component;
