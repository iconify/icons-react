import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pggcykugm.css';
import '../../css/s/sfbxtiqsz.css';
import '../../css/o/o8hoowu9h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pggcykugm"/><path class="sfbxtiqsz"/><path class="o8hoowu9h"/>`,
		"fallback": "selfhst:domainmod",
	});
}

export default Component;
