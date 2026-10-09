import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zigi0wfpw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zigi0wfpw"/>`,
		"fallback": "energy-icons:cloud-moon-48",
	});
}

export default Component;
