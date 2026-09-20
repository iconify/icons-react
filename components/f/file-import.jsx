import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/o/o0s3prb3b.css';
import '../../css/h/h5i3i5jgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="o0s3prb3b"/><path class="h5i3i5jgf"/></g>`,
		"fallback": "tdesign:file-import",
	});
}

export default Component;
