import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/na7p5znrb.css';
import '../../css/n/nb_zcubdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="na7p5znrb"/><path class="nb_zcubdy"/></g>`,
		"fallback": "vadivam:brush",
	});
}

export default Component;
