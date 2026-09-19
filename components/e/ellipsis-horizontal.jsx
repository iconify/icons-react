import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/seobvyb4q.css';
import '../../css/z/z9shncc0q.css';
import '../../css/f/f34m3cxbq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="seobvyb4q"/><circle class="z9shncc0q"/><circle class="f34m3cxbq"/></g>`,
		"fallback": "bytesize:ellipsis-horizontal",
	});
}

export default Component;
