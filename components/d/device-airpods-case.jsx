import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bkaz-jg1d.css';
import '../../css/n/ndl6-1bci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bkaz-jg1d"/><path class="ndl6-1bci"/></g>`,
		"fallback": "tabler:device-airpods-case",
	});
}

export default Component;
