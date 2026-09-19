import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfm8gg1mw.css';
import '../../css/g/g9n4ckv2m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfm8gg1mw"/><path class="g9n4ckv2m"/>`,
		"fallback": "carbon:cics-region-target",
	});
}

export default Component;
