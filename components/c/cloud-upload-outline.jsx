import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auny0rxul.css';
import '../../css/y/yweqwkbxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auny0rxul"/><path clip-rule="evenodd" class="yweqwkbxx"/>`,
		"fallback": "basil:cloud-upload-outline",
	});
}

export default Component;
