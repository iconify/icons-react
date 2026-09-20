import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nni06yb3c.css';
import '../../css/j/jbo3hqjeo.css';
import '../../css/w/wzw7k-iny.css';
import '../../css/g/gd_ri2pyu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nni06yb3c"/><path clip-rule="evenodd" class="jbo3hqjeo"/><path class="wzw7k-iny"/><path class="gd_ri2pyu"/></g>`,
		"fallback": "streamline-flex-color:button-record-1",
	});
}

export default Component;
