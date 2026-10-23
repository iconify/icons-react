import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o8olbnb2c.css';
import '../../css/p/phh-3ml9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o8olbnb2c"/><path class="phh-3ml9n"/></g>`,
		"fallback": "vadivam:cloud-lightning",
	});
}

export default Component;
