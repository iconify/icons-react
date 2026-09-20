import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mzs17083s.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/n/nf5tjgbdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mzs17083s"/><circle class="shu3xdl9q"/><path class="nf5tjgbdq"/></g>`,
		"fallback": "lucide-lab:baseball",
	});
}

export default Component;
