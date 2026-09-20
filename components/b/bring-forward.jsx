import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwgm37udc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwgm37udc"/>`,
		"fallback": "ri:bring-forward",
	});
}

export default Component;
