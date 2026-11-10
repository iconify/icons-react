import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lw45_bbvm.css';
import '../../css/z/zqg1rvg1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lw45_bbvm"/><path class="zqg1rvg1g"/></g>`,
		"fallback": "tabler:home-key",
	});
}

export default Component;
