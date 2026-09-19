import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o34222bbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o34222bbv"/>`,
		"fallback": "iconamoon:arrow-bottom-left-2-fill",
	});
}

export default Component;
