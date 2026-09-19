import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljkqsabqw.css';
import '../../css/k/k8gf3yb7n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljkqsabqw"/><path class="k8gf3yb7n"/>`,
		"fallback": "fxemoji:blackskullcrossbones",
	});
}

export default Component;
