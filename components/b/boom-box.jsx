import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tq-9j1bwk.css';
import '../../css/e/ezhkwibcm.css';
import '../../css/v/vj_1li4id.css';
import '../../css/c/cq3t79bqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tq-9j1bwk"/><rect class="ezhkwibcm"/><circle class="vj_1li4id"/><circle class="cq3t79bqd"/></g>`,
		"fallback": "lucide:boom-box",
	});
}

export default Component;
