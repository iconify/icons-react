import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bk8nq_bos.css';
import '../../css/w/wmo_rf61s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bk8nq_bos"/><path class="wmo_rf61s"/></g>`,
		"fallback": "tabler:brand-vlc",
	});
}

export default Component;
