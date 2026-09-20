import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lglvlnxox.css';
import '../../css/k/ktnt72cco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lglvlnxox"/><path class="ktnt72cco"/>`,
		"fallback": "streamline-ultimate:coffee-espresso-machine-bold",
	});
}

export default Component;
