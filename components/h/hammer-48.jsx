import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpjjukh9y.css';
import '../../css/i/i21vf0uiq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpjjukh9y"/><path class="i21vf0uiq"/>`,
		"fallback": "energy-icons:hammer-48",
	});
}

export default Component;
