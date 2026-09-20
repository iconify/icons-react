import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rrs195btf.css';
import '../../css/a/ahyfkhl9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rrs195btf"/><path clip-rule="evenodd" class="ahyfkhl9f"/></g>`,
		"fallback": "lets-icons:clock-fill",
	});
}

export default Component;
