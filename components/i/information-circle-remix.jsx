import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g561d8b7x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g561d8b7x"/>`,
		"fallback": "streamline-plump:information-circle-remix",
	});
}

export default Component;
