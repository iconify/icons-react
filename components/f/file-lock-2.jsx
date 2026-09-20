import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cgoc14bzs.css';
import '../../css/g/g6wanyb_h.css';
import '../../css/k/kawn60uka.css';
import '../../css/g/ge82jxbjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cgoc14bzs"/><path class="g6wanyb_h"/><rect class="kawn60uka"/><path class="ge82jxbjh"/></g>`,
		"fallback": "lucide:file-lock-2",
	});
}

export default Component;
