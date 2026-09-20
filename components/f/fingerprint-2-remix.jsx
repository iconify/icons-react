import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7zbkt1he.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n7zbkt1he"/>`,
		"fallback": "streamline-plump:fingerprint-2-remix",
	});
}

export default Component;
