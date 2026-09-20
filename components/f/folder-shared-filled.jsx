import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqah0fdbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqah0fdbt"/>`,
		"fallback": "tdesign:folder-shared-filled",
	});
}

export default Component;
