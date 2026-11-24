import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ora8653hh.css';
import '../../css/s/ssh18kvpm.css';
import '../../css/c/ce2pf8b6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ora8653hh"/><path class="ssh18kvpm"/><path class="ce2pf8b6w"/></g>`,
		"fallback": "lucide-extended:book-audio-duotone",
	});
}

export default Component;
