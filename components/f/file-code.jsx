import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qrzqppb6h.css';
import '../../css/j/jlv_n8f1c.css';
import '../../css/i/io7hwf6xz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qrzqppb6h"/><path class="jlv_n8f1c"/><path class="io7hwf6xz"/></g>`,
		"fallback": "andrsrxn:file-code",
	});
}

export default Component;
