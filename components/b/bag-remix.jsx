import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcb66cb1k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jcb66cb1k"/>`,
		"fallback": "streamline-plump:bag-remix",
	});
}

export default Component;
