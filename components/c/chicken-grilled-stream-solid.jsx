import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu4fxc7gq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mu4fxc7gq"/>`,
		"fallback": "streamline-sharp:chicken-grilled-stream-solid",
	});
}

export default Component;
