import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz0xl4pup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wz0xl4pup"/>`,
		"fallback": "streamline-logos:elastic-logstash-logo-block",
	});
}

export default Component;
