import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sjh-tuiwl.css';
import '../../css/u/uslgrjk2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sjh-tuiwl"/><path class="uslgrjk2j"/></g>`,
		"fallback": "withicons-bauhaus:footprints",
	});
}

export default Component;
