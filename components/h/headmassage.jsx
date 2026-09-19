import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od8prleef.css';
import '../../css/v/vcz839b_q.css';
import '../../css/a/a-8y43byq.css';
import '../../css/b/bwdrjbyqo.css';
import '../../css/e/ep4bm2bwn.css';
import '../../css/w/w33f4pbuw.css';
import '../../css/l/lv4qjzjdl.css';
import '../../css/t/tdd6pid4l.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od8prleef"/><path class="vcz839b_q"/><path class="a-8y43byq"/><path class="bwdrjbyqo"/><path class="ep4bm2bwn"/><path class="w33f4pbuw"/><path class="lv4qjzjdl"/><path class="tdd6pid4l"/>`,
		"fallback": "fxemoji:headmassage",
	});
}

export default Component;
