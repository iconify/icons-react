import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vst9gbbqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vst9gbbqy"/>`,
		"fallback": "keyline-icons:activity-sharp-two-tone",
	});
}

export default Component;
