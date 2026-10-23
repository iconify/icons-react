import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zqkchcces.css';
import '../../css/z/zog6wromu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zqkchcces"/><path class="zog6wromu"/></g>`,
		"fallback": "vadivam:hotel",
	});
}

export default Component;
