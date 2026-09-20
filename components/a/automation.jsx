import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gij7ktacb.css';
import '../../css/m/mz9tvf11r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gij7ktacb"/><path class="mz9tvf11r"/></g>`,
		"fallback": "tabler:automation",
	});
}

export default Component;
