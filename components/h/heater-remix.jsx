import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz3jdgqwg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nz3jdgqwg"/>`,
		"fallback": "streamline-plump:heater-remix",
	});
}

export default Component;
