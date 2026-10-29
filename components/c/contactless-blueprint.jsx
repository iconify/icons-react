import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xlqvroe0h.css';
import '../../css/h/hz6bz3kis.css';
import '../../css/q/qcou4juum.css';
import '../../css/t/t6-3s1b-c.css';
import '../../css/l/l9w7xcc6c.css';
import '../../css/i/ix6krjyxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco xlqvroe0h"/><path class="hz6bz3kis wm-deco"/><path class="qcou4juum wm-k"/><path class="t6-3s1b-c wm-a"/><path class="l9w7xcc6c wm-k"/><path class="ix6krjyxu wm-a"/></g>`,
		"fallback": "withicons:contactless-blueprint",
	});
}

export default Component;
