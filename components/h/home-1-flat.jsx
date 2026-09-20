import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq4_tk9zy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tq4_tk9zy"/>`,
		"fallback": "streamline-sharp-color:home-1-flat",
	});
}

export default Component;
