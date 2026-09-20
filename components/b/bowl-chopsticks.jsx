import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kntl17b-w.css';
import '../../css/i/iaaombc7o.css';
import '../../css/s/sr1jcbcrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kntl17b-w"/><ellipse class="iaaombc7o"/><path class="sr1jcbcrc"/></g>`,
		"fallback": "lucide-lab:bowl-chopsticks",
	});
}

export default Component;
