import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ewtlzpb8l.css';
import '../../css/w/wkp2o9z2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ewtlzpb8l"/><path class="wkp2o9z2t"/></g>`,
		"fallback": "tabler:brand-nytimes",
	});
}

export default Component;
