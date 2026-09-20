import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3_twbp1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s3_twbp1h"/>`,
		"fallback": "solar:headphones-round-sound-outline",
	});
}

export default Component;
