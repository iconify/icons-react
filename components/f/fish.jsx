import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nc1h4zb3b.css';
import '../../css/k/kxkkrtbdg.css';
import '../../css/j/jvue64i5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nc1h4zb3b"/><path class="kxkkrtbdg"/><path class="jvue64i5s"/></g>`,
		"fallback": "lucide:fish",
	});
}

export default Component;
