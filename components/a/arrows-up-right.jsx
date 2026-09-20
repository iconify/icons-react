import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kc019-ayr.css';
import '../../css/m/m-88yyb8h.css';
import '../../css/s/svzdrmpng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kc019-ayr"/><path class="m-88yyb8h"/><path class="svzdrmpng"/></g>`,
		"fallback": "tabler:arrows-up-right",
	});
}

export default Component;
