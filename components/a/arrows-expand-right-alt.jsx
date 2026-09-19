import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my5e902_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my5e902_n"/>`,
		"fallback": "gg:arrows-expand-right-alt",
	});
}

export default Component;
