import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxkgrdb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxkgrdb2v"/>`,
		"fallback": "coolicons:file-edit-corner-round",
	});
}

export default Component;
