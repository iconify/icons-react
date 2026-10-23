import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o6d6x_egj.css';
import '../../css/q/qhj34pf_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o6d6x_egj"/><path class="qhj34pf_f"/></g>`,
		"fallback": "vadivam:folder-output",
	});
}

export default Component;
