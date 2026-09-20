import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv-d25bbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wv-d25bbn"/>`,
		"fallback": "keyline-icons:cloud-x-sharp-fill",
	});
}

export default Component;
