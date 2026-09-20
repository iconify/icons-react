import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqc0fgbln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqc0fgbln"/>`,
		"fallback": "tabler:droplet-dollar",
	});
}

export default Component;
