import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy8bqqblj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qy8bqqblj"/>`,
		"fallback": "streamline-sharp:flashlight-solid",
	});
}

export default Component;
