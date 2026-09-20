import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a8s1habcq.css';
import '../../css/c/c9zv0kbln.css';
import '../../css/b/blx-8dnbn.css';
import '../../css/i/ibjsi_bpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a8s1habcq"/><path class="c9zv0kbln"/><path class="blx-8dnbn"/><path class="ibjsi_bpx"/></g>`,
		"fallback": "tdesign:city-15",
	});
}

export default Component;
