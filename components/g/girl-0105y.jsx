import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud4eghbxh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ud4eghbxh"/>`,
		"fallback": "healthicons:girl-0105y",
	});
}

export default Component;
