import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swwrsubca.css';
import '../../css/g/g0ga_t5io.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swwrsubca"/><path class="g0ga_t5io"/>`,
		"fallback": "carbon:camera",
	});
}

export default Component;
