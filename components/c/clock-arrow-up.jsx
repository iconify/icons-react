import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rlyqeqb5c.css';
import '../../css/w/wtl4ombtk.css';
import '../../css/i/iz5phjbrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rlyqeqb5c"/><path class="wtl4ombtk"/><path class="iz5phjbrv"/></g>`,
		"fallback": "lucide:clock-arrow-up",
	});
}

export default Component;
