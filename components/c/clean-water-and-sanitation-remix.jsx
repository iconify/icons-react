import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_va5_htj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l_va5_htj"/>`,
		"fallback": "streamline:clean-water-and-sanitation-remix",
	});
}

export default Component;
