import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/o/ockota.css';
import '../../css/k/kj2bfh.css';
import '../../css/s/so-from-28.css';
import '../../css/d/d-7xq8qc.css';
import '../../css/d/d-7h3jep.css';
import '../../css/f/fade-qhlvwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c ockota"/><path class="a0m25c kj2bfh"/>`,
		"fallback": "line-md:hazard-lights-loop",
	});
}

export default Component;
