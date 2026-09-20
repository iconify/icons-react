import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wo9nqsi3z.css';
import '../../css/e/e7l1odb0b.css';
import '../../css/f/f6jbyibzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wo9nqsi3z"/><ellipse class="e7l1odb0b"/><path class="f6jbyibzu"/></g>`,
		"fallback": "lucide-lab:ice-hockey",
	});
}

export default Component;
