import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t_69hpuni.css';
import '../../css/r/rw7mf9_-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t_69hpuni"/><path class="rw7mf9_-h"/></g>`,
		"fallback": "lucide:file-pen",
	});
}

export default Component;
