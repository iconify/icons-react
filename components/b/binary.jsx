import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qubl4sb6x.css';
import '../../css/j/jmefr5bvy.css';
import '../../css/z/z-qllkbth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="qubl4sb6x"/><rect class="jmefr5bvy"/><path class="z-qllkbth"/></g>`,
		"fallback": "lucide:binary",
	});
}

export default Component;
