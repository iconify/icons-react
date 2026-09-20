import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvne0-wkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvne0-wkn"/>`,
		"fallback": "mdi:anvil",
	});
}

export default Component;
