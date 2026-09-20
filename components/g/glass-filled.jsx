import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moqx-40tt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moqx-40tt"/>`,
		"fallback": "reicon:glass-filled",
	});
}

export default Component;
