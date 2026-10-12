import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqboyjbcd.css';
import '../../css/k/ktpj8ab8f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqboyjbcd"/><path class="ktpj8ab8f"/>`,
		"fallback": "energy-icons:function-48",
	});
}

export default Component;
