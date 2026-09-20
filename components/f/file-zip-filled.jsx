import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7kkb9bqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7kkb9bqn"/>`,
		"fallback": "tdesign:file-zip-filled",
	});
}

export default Component;
