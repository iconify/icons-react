import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7e1lvb-a.css';
import '../../css/i/i-u8wbcid.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/o/o5a5dzf_w.css';
import '../../css/p/p89qpiyno.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="t7e1lvb-a"/><path class="i-u8wbcid"/><g class="jn8qy4bru"><path class="o5a5dzf_w"/><circle class="p89qpiyno"/></g>`,
		"fallback": "openmoji:female-sign",
	});
}

export default Component;
