import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa3qufpne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa3qufpne"/>`,
		"fallback": "tabler:exposure-off",
	});
}

export default Component;
