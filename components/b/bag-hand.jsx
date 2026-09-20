import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ivv3pgbdx.css';
import '../../css/a/a4cne2uyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ivv3pgbdx"/><path class="a4cne2uyj"/></g>`,
		"fallback": "lucide-lab:bag-hand",
	});
}

export default Component;
