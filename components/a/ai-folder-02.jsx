import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlw2aibwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlw2aibwo"/>`,
		"fallback": "hugeicons:ai-folder-02",
	});
}

export default Component;
