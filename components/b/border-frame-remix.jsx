import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dccel2bpn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dccel2bpn"/>`,
		"fallback": "streamline-plump:border-frame-remix",
	});
}

export default Component;
