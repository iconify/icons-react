import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggwmqsbrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ggwmqsbrc"/>`,
		"fallback": "streamline-sharp:dashboard-gauge-2-solid",
	});
}

export default Component;
