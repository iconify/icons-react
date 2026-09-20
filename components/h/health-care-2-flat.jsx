import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcykceb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rcykceb4i"/>`,
		"fallback": "streamline-sharp-color:health-care-2-flat",
	});
}

export default Component;
