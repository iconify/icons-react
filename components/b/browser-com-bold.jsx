import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg1mfnptg.css';
import '../../css/l/l6wc1bw2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg1mfnptg"/><path class="l6wc1bw2i"/>`,
		"fallback": "streamline-ultimate:browser-com-bold",
	});
}

export default Component;
