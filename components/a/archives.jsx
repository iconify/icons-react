import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_enfybsp.css';
import '../../css/r/rrjee4b2a.css';
import '../../css/z/ztx3gnhsa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_enfybsp"/><path class="rrjee4b2a"/><path class="ztx3gnhsa"/>`,
		"fallback": "vaadin:archives",
	});
}

export default Component;
