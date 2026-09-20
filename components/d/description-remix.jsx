import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw3driq-o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bw3driq-o"/>`,
		"fallback": "streamline-plump:description-remix",
	});
}

export default Component;
