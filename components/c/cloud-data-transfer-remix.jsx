import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kar-pobqu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kar-pobqu"/>`,
		"fallback": "streamline:cloud-data-transfer-remix",
	});
}

export default Component;
