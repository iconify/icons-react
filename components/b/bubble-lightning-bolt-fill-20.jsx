import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi98z-bsr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi98z-bsr"/>`,
		"fallback": "garden:bubble-lightning-bolt-fill-20",
	});
}

export default Component;
