import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clh-9mboo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="clh-9mboo"/>`,
		"fallback": "streamline-plump:cloud-off-solid",
	});
}

export default Component;
