import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/v/vrdtgthjw.css';
import '../../css/t/tno6_nwxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="h_tsn8bxt"/><path class="vrdtgthjw"/><path class="tno6_nwxq"/></g>`,
		"fallback": "lucide:ferris-wheel",
	});
}

export default Component;
