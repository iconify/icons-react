import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ny87dobof.css';
import '../../css/g/gtc2uzbxu.css';
import '../../css/d/d8wygibdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ny87dobof"/><circle class="gtc2uzbxu"/><path class="d8wygibdy"/></g>`,
		"fallback": "lucide-lab:chameleon",
	});
}

export default Component;
