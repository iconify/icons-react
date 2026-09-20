import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-hs3qeyi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n-hs3qeyi"/>`,
		"fallback": "streamline-plump:insert-side-remix",
	});
}

export default Component;
