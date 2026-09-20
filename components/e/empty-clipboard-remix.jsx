import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyl9-3bqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iyl9-3bqy"/>`,
		"fallback": "streamline-sharp:empty-clipboard-remix",
	});
}

export default Component;
