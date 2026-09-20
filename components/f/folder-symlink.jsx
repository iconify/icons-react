import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s-fu53nbh.css';
import '../../css/n/nyqw09ddw.css';
import '../../css/o/ow6s6rp_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s-fu53nbh"/><path class="nyqw09ddw"/><path class="ow6s6rp_r"/></g>`,
		"fallback": "tabler:folder-symlink",
	});
}

export default Component;
