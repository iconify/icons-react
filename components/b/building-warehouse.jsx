import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oyh9lmt_o.css';
import '../../css/o/oq9bqzrlw.css';
import '../../css/t/tzrlok7en.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oyh9lmt_o"/><path class="oq9bqzrlw"/><path class="tzrlok7en"/></g>`,
		"fallback": "tabler:building-warehouse",
	});
}

export default Component;
