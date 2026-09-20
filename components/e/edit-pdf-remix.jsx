import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eazp9w1_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eazp9w1_a"/>`,
		"fallback": "streamline-sharp:edit-pdf-remix",
	});
}

export default Component;
