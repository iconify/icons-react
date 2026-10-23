import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5n2x1bjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5n2x1bjc"/>`,
		"fallback": "vadivam:folder-archive",
	});
}

export default Component;
