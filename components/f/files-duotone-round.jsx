import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/khuiqacrc.css';
import '../../css/a/a76rvbb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="khuiqacrc"/><path class="a76rvbb1i"/></g>`,
		"fallback": "coolicons:files-duotone-round",
	});
}

export default Component;
