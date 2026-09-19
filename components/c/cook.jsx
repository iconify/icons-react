import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/eh3-3-9cm.css';
import '../../css/s/sk-ey8gzq.css';
import '../../css/l/lop2u4y2i.css';
import '../../css/i/i6gzw25wz.css';
import '../../css/i/i12fh4bbk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="eh3-3-9cm"/><path class="sk-ey8gzq"/><path class="lop2u4y2i"/><path class="i6gzw25wz"/><path class="i12fh4bbk"/></g>`,
		"fallback": "icon-park:cook",
	});
}

export default Component;
