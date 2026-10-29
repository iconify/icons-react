import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u9waiq48s.css';
import '../../css/i/i33g0y7wa.css';
import '../../css/u/u68m2py0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u9waiq48s"/><path class="i33g0y7wa"/><path class="u68m2py0d"/></g>`,
		"fallback": "vadivam:folder-open-dot",
	});
}

export default Component;
