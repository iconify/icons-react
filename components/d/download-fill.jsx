import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4og5_bir.css';
import '../../css/y/yypjo3b2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a4og5_bir"/><path class="yypjo3b2v"/>`,
		"fallback": "lets-icons:download-fill",
	});
}

export default Component;
