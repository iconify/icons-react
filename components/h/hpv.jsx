import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oss5gcbyc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oss5gcbyc"/>`,
		"fallback": "healthicons:hpv",
	});
}

export default Component;
