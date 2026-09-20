import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i09db8b9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i09db8b9q"/>`,
		"fallback": "streamline-sharp:fire-alarm-1-remix",
	});
}

export default Component;
