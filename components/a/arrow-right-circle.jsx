import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aemjy9b3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aemjy9b3f"/>`,
		"fallback": "tabler:arrow-right-circle",
	});
}

export default Component;
