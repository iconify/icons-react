import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsocbf_2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsocbf_2a"/>`,
		"fallback": "keyline-icons:face-frown-sharp-fill",
	});
}

export default Component;
