import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c871etbzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c871etbzn"/>`,
		"fallback": "tabler:arrow-bar-to-left",
	});
}

export default Component;
