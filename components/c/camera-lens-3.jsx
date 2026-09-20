import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/giv3sgb-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="giv3sgb-w"/>`,
		"fallback": "streamline-cyber:camera-lens-3",
	});
}

export default Component;
