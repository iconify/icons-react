import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/avoltjbjo.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/l/lv5w9wbqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="avoltjbjo"/><circle class="h_tsn8bxt"/><path class="lv5w9wbqr"/></g>`,
		"fallback": "lucide:banknote",
	});
}

export default Component;
