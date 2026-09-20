import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s5p5n7olm.css';
import '../../css/k/klnhtubet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s5p5n7olm"/><path class="klnhtubet"/></g>`,
		"fallback": "lucide:badge-pound-sterling",
	});
}

export default Component;
