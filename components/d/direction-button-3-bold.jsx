import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juvra6bcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juvra6bcv"/>`,
		"fallback": "streamline-ultimate:direction-button-3-bold",
	});
}

export default Component;
