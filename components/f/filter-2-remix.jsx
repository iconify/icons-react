import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mroolm-ex.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mroolm-ex"/>`,
		"fallback": "streamline-flex:filter-2-remix",
	});
}

export default Component;
