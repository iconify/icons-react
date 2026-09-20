import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm7ezmb3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lm7ezmb3o"/>`,
		"fallback": "streamline-sharp:battery-empty-2-solid",
	});
}

export default Component;
