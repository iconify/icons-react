import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmyi_m26e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jmyi_m26e"/>`,
		"fallback": "streamline-plump:charging-remix",
	});
}

export default Component;
