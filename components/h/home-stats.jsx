import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l6xmiu9yl.css';
import '../../css/b/b_dk99s4m.css';
import '../../css/s/ssw2-urzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l6xmiu9yl"/><path class="b_dk99s4m"/><path class="ssw2-urzx"/></g>`,
		"fallback": "tabler:home-stats",
	});
}

export default Component;
