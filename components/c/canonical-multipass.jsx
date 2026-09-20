import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdm4w2bac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdm4w2bac"/>`,
		"fallback": "thesvg-color:canonical-multipass",
	});
}

export default Component;
