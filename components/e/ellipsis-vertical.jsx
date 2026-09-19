import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j5u9w_zfh.css';
import '../../css/z/z9shncc0q.css';
import '../../css/o/ou5gtwb5g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="j5u9w_zfh"/><circle class="z9shncc0q"/><circle class="ou5gtwb5g"/></g>`,
		"fallback": "bytesize:ellipsis-vertical",
	});
}

export default Component;
