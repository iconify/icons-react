import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9kjshfdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9kjshfdg"/>`,
		"fallback": "lucide:box-dashed",
	});
}

export default Component;
