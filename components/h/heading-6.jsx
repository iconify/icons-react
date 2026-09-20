import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cx32p2cis.css';
import '../../css/h/h6zst5bek.css';
import '../../css/h/hb2om2t_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cx32p2cis"/><circle class="h6zst5bek"/><path class="hb2om2t_r"/></g>`,
		"fallback": "lucide:heading-6",
	});
}

export default Component;
