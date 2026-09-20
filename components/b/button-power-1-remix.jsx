import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr5s-2baf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vr5s-2baf"/>`,
		"fallback": "streamline-plump:button-power-1-remix",
	});
}

export default Component;
