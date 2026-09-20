import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi52v6bpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi52v6bpv"/>`,
		"fallback": "uil:arrow-to-bottom",
	});
}

export default Component;
