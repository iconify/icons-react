import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je9cy9swr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="je9cy9swr"/>`,
		"fallback": "streamline-plump:input-box-remix",
	});
}

export default Component;
