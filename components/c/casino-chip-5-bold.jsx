import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq6pcxtyo.css';
import '../../css/p/pod1125gd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq6pcxtyo"/><path class="pod1125gd"/>`,
		"fallback": "streamline-ultimate:casino-chip-5-bold",
	});
}

export default Component;
