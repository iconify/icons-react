import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd6l4xbvy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hd6l4xbvy"/>`,
		"fallback": "streamline-plump:inbox-post-remix",
	});
}

export default Component;
