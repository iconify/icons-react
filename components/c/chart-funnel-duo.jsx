import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d7uszhbcj.css';
import '../../css/f/flbsvpbyj.css';
import '../../css/d/dakzdk03i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="d7uszhbcj"/><path class="flbsvpbyj wm-a"/><path class="dakzdk03i"/></g>`,
		"fallback": "withicons:chart-funnel-duo",
	});
}

export default Component;
