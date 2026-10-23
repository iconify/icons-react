import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o8olbnb2c.css';
import '../../css/y/y-5kz-2kw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o8olbnb2c"/><path class="y-5kz-2kw"/></g>`,
		"fallback": "vadivam:cloud-sync",
	});
}

export default Component;
