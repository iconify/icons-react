import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrcgrxwzk.css';
import '../../css/d/d79oyzb2x.css';
import '../../css/d/d1ym2h3ya.css';
import '../../css/x/xp11q_bwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrcgrxwzk"/><circle class="d79oyzb2x"/><circle class="d1ym2h3ya"/><path class="xp11q_bwe"/>`,
		"fallback": "eos-icons:ai-healing",
	});
}

export default Component;
