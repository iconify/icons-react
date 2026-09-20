import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3bo38t3s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b3bo38t3s"/>`,
		"fallback": "streamline-plump:airplane-disabled-remix",
	});
}

export default Component;
