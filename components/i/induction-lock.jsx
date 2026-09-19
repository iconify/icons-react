import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/q/q13ik7jzl.css';
import '../../css/i/im4w5mbav.css';
import '../../css/n/no6nkkbnk.css';
import '../../css/e/eev5yr9rd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="q13ik7jzl"/><path class="im4w5mbav"/><path class="no6nkkbnk"/><path class="eev5yr9rd"/></g>`,
		"fallback": "icon-park:induction-lock",
	});
}

export default Component;
