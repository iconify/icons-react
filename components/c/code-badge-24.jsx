import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx01pybcw.css';
import '../../css/g/go6el9bno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx01pybcw"/><path class="go6el9bno"/>`,
		"fallback": "octicon:code-badge-24",
	});
}

export default Component;
