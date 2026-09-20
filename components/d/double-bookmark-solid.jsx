import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj-wffr9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nj-wffr9t"/>`,
		"fallback": "streamline-sharp:double-bookmark-solid",
	});
}

export default Component;
