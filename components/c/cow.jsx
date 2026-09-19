import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9trpfb6k.css';
import '../../css/f/fuaa95bjf.css';
import '../../css/b/b_ueihbie.css';
import '../../css/s/suahm1bcq.css';
import '../../css/g/gwyu_zr4s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9trpfb6k"/><path class="fuaa95bjf"/><path class="b_ueihbie"/><path class="suahm1bcq"/><path class="gwyu_zr4s"/>`,
		"fallback": "fxemoji:cow",
	});
}

export default Component;
