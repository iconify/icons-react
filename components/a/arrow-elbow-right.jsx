import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eidcqb6uu.css';
import '../../css/w/wusjrbb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eidcqb6uu"/><path class="wusjrbb5p"/></g>`,
		"fallback": "tabler:arrow-elbow-right",
	});
}

export default Component;
