import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/g9n85nbft.css';
import '../../css/j/jm_9mjbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="g9n85nbft"/><path class="jm_9mjbzo"/></g>`,
		"fallback": "matita:circle-stop",
	});
}

export default Component;
