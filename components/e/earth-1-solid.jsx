import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po9gs7fih.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="po9gs7fih"/>`,
		"fallback": "streamline-plump:earth-1-solid",
	});
}

export default Component;
