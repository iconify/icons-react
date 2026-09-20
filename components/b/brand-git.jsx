import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n0dy2dhvf.css';
import '../../css/b/bzanpxylq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n0dy2dhvf"/><path class="bzanpxylq"/></g>`,
		"fallback": "tabler:brand-git",
	});
}

export default Component;
