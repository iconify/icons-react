import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm7ljybas.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nm7ljybas"/>`,
		"fallback": "healthicons:fingerprint",
	});
}

export default Component;
