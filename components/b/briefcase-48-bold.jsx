import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_xt6zhqo.css';
import '../../css/c/c1okp3bit.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_xt6zhqo"/><path class="c1okp3bit"/>`,
		"fallback": "energy-icons:briefcase-48-bold",
	});
}

export default Component;
