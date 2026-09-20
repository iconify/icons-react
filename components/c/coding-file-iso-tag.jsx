import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bni5ewbaj.css';
import '../../css/i/ijl_iqh9b.css';
import '../../css/x/xf75twbif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bni5ewbaj"/><path class="ijl_iqh9b"/><path class="xf75twbif"/></g>`,
		"fallback": "streamline-freehand:coding-file-iso-tag",
	});
}

export default Component;
