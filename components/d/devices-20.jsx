import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp91tlbdg.css';
import '../../css/x/xlpk22b2f.css';
import '../../css/b/bt9_q9bro.css';
import '../../css/h/h6ll56bfq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp91tlbdg"/><path class="xlpk22b2f"/><path class="bt9_q9bro"/><path class="h6ll56bfq"/>`,
		"fallback": "energy-icons:devices-20",
	});
}

export default Component;
