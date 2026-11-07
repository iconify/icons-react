import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1h-skj_u.css';
import '../../css/w/w4baz7bpm.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/kbpgquogb.css';
import '../../css/c/c-z2as80v.css';
import '../../css/p/p6n9a1t9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1h-skj_u"/><path class="w4baz7bpm"/><g class="xtpeb-edw"><path class="kbpgquogb"/><path class="c-z2as80v"/><path class="p6n9a1t9g"/></g>`,
		"fallback": "solar:dumbbell-small-bold-duotone",
	});
}

export default Component;
