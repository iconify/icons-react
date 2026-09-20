import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khu8suq8i.css';
import '../../css/z/znbu_mb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khu8suq8i"/><path class="znbu_mb9k"/>`,
		"fallback": "streamline-ultimate:factory-industrial-robot-arm-1-bold",
	});
}

export default Component;
