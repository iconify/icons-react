import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hmyn2cb-f.css';
import '../../css/z/zs13s_bpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hmyn2cb-f"/><circle class="zs13s_bpz"/></g>`,
		"fallback": "lucide:folder-clock",
	});
}

export default Component;
