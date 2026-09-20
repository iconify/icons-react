import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlb2rkunv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlb2rkunv"/>`,
		"fallback": "streamline-ultimate:add-circle-bold-bold",
	});
}

export default Component;
