import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruobg3brx.css';
import '../../css/n/nr8lbkbxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ruobg3brx"/><path class="nr8lbkbxk"/>`,
		"fallback": "basil:folder-lock-solid",
	});
}

export default Component;
