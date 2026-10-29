import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lhr7mp78x.css';
import '../../css/a/al_hgmb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lhr7mp78x"/><path class="al_hgmb2q wm-a"/></g>`,
		"fallback": "withicons:cloud-fog",
	});
}

export default Component;
