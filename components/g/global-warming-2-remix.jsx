import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjzrtrbol.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gjzrtrbol"/>`,
		"fallback": "streamline-plump:global-warming-2-remix",
	});
}

export default Component;
