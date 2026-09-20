import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy-4qo5at.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zy-4qo5at"/>`,
		"fallback": "streamline-sharp:gift-2-solid",
	});
}

export default Component;
