import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2-9wig_g.css';
import '../../css/k/kow831b3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2-9wig_g"/><path class="kow831b3b"/>`,
		"fallback": "si:briefcase-medical-duotone",
	});
}

export default Component;
