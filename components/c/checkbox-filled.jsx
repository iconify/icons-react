import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdvf5flpm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdvf5flpm"/>`,
		"fallback": "ix:checkbox-filled",
	});
}

export default Component;
