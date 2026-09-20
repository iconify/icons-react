import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/soq9mxeph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="soq9mxeph"/>`,
		"fallback": "streamline-sharp:download-box-1-solid",
	});
}

export default Component;
