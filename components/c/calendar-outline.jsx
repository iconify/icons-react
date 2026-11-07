import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti9suu5lc.css';
import '../../css/v/v4rt0mblj.css';
import '../../css/k/kb3qv9b3z.css';
import '../../css/m/mf9o9n5rb.css';
import '../../css/i/iwj00ck4i.css';
import '../../css/a/a57658x1e.css';
import '../../css/v/vomldszvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti9suu5lc"/><path class="v4rt0mblj"/><path class="kb3qv9b3z"/><path class="mf9o9n5rb"/><path class="iwj00ck4i"/><path class="a57658x1e"/><path clip-rule="evenodd" class="vomldszvb"/>`,
		"fallback": "solar:calendar-outline",
	});
}

export default Component;
