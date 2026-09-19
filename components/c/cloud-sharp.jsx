import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md2u8j46v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md2u8j46v"/>`,
		"fallback": "ion:cloud-sharp",
	});
}

export default Component;
