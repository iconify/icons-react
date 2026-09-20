import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f2yqqib5f.css';
import '../../css/x/xvdfgms8f.css';
import '../../css/i/ide5axbrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f2yqqib5f"/><path class="xvdfgms8f"/><circle class="ide5axbrv"/></g>`,
		"fallback": "lucide:id-card-lanyard",
	});
}

export default Component;
