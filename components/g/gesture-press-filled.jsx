import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq89zwbag.css';
import '../../css/c/cy-trabnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq89zwbag"/><path class="cy-trabnj"/>`,
		"fallback": "tdesign:gesture-press-filled",
	});
}

export default Component;
