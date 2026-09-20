import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syp_70bml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="syp_70bml"/>`,
		"fallback": "streamline-sharp:download-stack-remix",
	});
}

export default Component;
