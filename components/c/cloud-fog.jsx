import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snv4fbb_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snv4fbb_c"/>`,
		"fallback": "pixel:cloud-fog",
	});
}

export default Component;
