import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brzmvc2-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="brzmvc2-k"/>`,
		"fallback": "solar:folder-with-files-outline",
	});
}

export default Component;
