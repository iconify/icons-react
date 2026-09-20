import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqh28jm6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqh28jm6a"/>`,
		"fallback": "streamline-cyber:fork-knife",
	});
}

export default Component;
