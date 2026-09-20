import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b05bz6biv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b05bz6biv"/>`,
		"fallback": "streamline-plump:disable-heart-solid",
	});
}

export default Component;
