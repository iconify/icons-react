import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln3utrbmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ln3utrbmf"/>`,
		"fallback": "streamline-sharp:copy-link-solid",
	});
}

export default Component;
