import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5-7tvbkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y5-7tvbkq"/>`,
		"fallback": "streamline-logos:elastic-logstash-logo-solid",
	});
}

export default Component;
