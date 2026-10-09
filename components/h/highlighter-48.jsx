import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llfrr31qw.css';
import '../../css/h/hqz3w2b_j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llfrr31qw"/><path class="hqz3w2b_j"/>`,
		"fallback": "energy-icons:highlighter-48",
	});
}

export default Component;
