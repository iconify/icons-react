import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/ag0v-acmh.css';
import '../../css/d/d8c12jbum.css';
import '../../css/x/xej2rac3m.css';
import '../../css/g/g3en8sbit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ag0v-acmh wm-shadow"/><path class="d8c12jbum wm-shadow"/><path class="xej2rac3m"/><path class="g3en8sbit"/></g>`,
		"fallback": "withicons-brutal:arrow-left",
	});
}

export default Component;
