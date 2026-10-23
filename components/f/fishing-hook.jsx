import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gq4x5-y3m.css';
import '../../css/h/hztwgh1lv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gq4x5-y3m"/><path class="hztwgh1lv"/></g>`,
		"fallback": "vadivam:fishing-hook",
	});
}

export default Component;
