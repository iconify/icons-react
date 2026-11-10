import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/za134w8xh.css';
import '../../css/h/hik1tdbek.css';
import '../../css/s/szkh23b-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="za134w8xh"/><path class="hik1tdbek"/><path class="szkh23b-h"/></g>`,
		"fallback": "tabler:brand-viber",
	});
}

export default Component;
