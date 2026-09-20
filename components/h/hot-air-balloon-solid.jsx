import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6evof38d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w6evof38d"/>`,
		"fallback": "streamline-sharp:hot-air-balloon-solid",
	});
}

export default Component;
