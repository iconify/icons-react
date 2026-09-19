import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gi4vrobsn.css';
import '../../css/p/p12hmpb2x.css';
import '../../css/u/u1u9i0blc.css';
import '../../css/z/z5uvadc1x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gi4vrobsn"/><path class="p12hmpb2x"/><path class="u1u9i0blc"/><path class="z5uvadc1x"/></g>`,
		"fallback": "fluent-emoji-flat:black-nib",
	});
}

export default Component;
