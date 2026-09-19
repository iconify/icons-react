import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmyun8gui.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jmyun8gui"/>`,
		"fallback": "healthicons:excel-logo2x-outline",
	});
}

export default Component;
