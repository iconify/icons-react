import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxvrjd6wn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bxvrjd6wn"/>`,
		"fallback": "streamline-sharp:insert-cloud-link-solid",
	});
}

export default Component;
