import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqlze7bpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqlze7bpv"/>`,
		"fallback": "mdi:archive-minus",
	});
}

export default Component;
