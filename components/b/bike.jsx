import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l005-rw7v.css';
import '../../css/d/d-e424q9g.css';
import '../../css/f/ftoxqwbpl.css';
import '../../css/b/byt_zx-un.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="l005-rw7v"/><circle class="d-e424q9g"/><circle class="ftoxqwbpl"/><path class="byt_zx-un"/></g>`,
		"fallback": "lucide:bike",
	});
}

export default Component;
