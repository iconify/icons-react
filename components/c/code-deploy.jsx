import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0gbg4buk.css';
import '../../css/n/njpi2rhkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0gbg4buk"/><path class="njpi2rhkg"/>`,
		"fallback": "eos-icons:code-deploy",
	});
}

export default Component;
