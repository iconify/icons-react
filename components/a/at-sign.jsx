import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y17k9sbpu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y17k9sbpu"/>`,
		"fallback": "pinhead:at-sign",
	});
}

export default Component;
