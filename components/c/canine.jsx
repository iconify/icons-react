import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs0_gzboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs0_gzboc"/>`,
		"fallback": "mdi:canine",
	});
}

export default Component;
