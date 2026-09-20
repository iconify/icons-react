import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myvgkfbog.css';
import '../../css/d/dgx730bnu.css';
import '../../css/z/zvgoqqucx.css';
import '../../css/a/a7u84mb6k.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/b/bu4-r-bgk.css';
import '../../css/c/cwgyj6bzc.css';
import '../../css/q/qypzbsbhz.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myvgkfbog"/><path class="dgx730bnu"/><path class="zvgoqqucx"/><path class="a7u84mb6k"/><g class="doj9dq_jg"><path class="bu4-r-bgk"/><path class="cwgyj6bzc"/><path class="qypzbsbhz"/></g>`,
		"fallback": "openmoji:beer-mug",
	});
}

export default Component;
