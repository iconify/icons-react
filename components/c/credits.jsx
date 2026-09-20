import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/usve24bks.css';
import '../../css/l/l0bbvr7zu.css';
import '../../css/t/t3oiopagy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="usve24bks"/><path class="l0bbvr7zu"/><path class="t3oiopagy"/></g>`,
		"fallback": "tabler:credits",
	});
}

export default Component;
