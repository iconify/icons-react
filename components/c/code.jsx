import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vf2-xfbed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vf2-xfbed"/>`,
		"fallback": "lucide:code",
	});
}

export default Component;
