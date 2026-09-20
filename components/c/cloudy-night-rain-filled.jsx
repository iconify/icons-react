import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml4h4gbtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml4h4gbtq"/>`,
		"fallback": "tdesign:cloudy-night-rain-filled",
	});
}

export default Component;
