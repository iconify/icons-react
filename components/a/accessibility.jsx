import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4ia2pgnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4ia2pgnk"/>`,
		"fallback": "noviair:accessibility",
	});
}

export default Component;
