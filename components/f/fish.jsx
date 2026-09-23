import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krnq7hbqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krnq7hbqk"/>`,
		"fallback": "meteor-icons:fish",
	});
}

export default Component;
