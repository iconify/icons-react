import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfo2tsbqu.css';
import '../../css/n/n00rjyr1l.css';
import '../../css/m/m0ls1dbyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfo2tsbqu"/><path class="n00rjyr1l"/><path class="m0ls1dbyt"/>`,
		"fallback": "solar:cloudy-moon-bold",
	});
}

export default Component;
