import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah3pnpibj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ah3pnpibj"/>`,
		"fallback": "streamline-sharp:download-square-solid",
	});
}

export default Component;
