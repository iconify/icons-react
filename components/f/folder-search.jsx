import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sqmbsu6jh.css';
import '../../css/o/oj7oldkqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sqmbsu6jh"/><path class="oj7oldkqx"/></g>`,
		"fallback": "vadivam:folder-search",
	});
}

export default Component;
