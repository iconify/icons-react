import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sys-ifbsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sys-ifbsz"/>`,
		"fallback": "lucide-lab:bra-sports",
	});
}

export default Component;
