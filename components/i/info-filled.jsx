import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suvk3db8z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="suvk3db8z"/>`,
		"fallback": "pepicons:info-filled",
	});
}

export default Component;
