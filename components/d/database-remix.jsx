import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8uahibmk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e8uahibmk"/>`,
		"fallback": "streamline-flex:database-remix",
	});
}

export default Component;
