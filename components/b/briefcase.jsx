import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p14n-8bpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p14n-8bpv"/>`,
		"fallback": "heroicons:briefcase",
	});
}

export default Component;
