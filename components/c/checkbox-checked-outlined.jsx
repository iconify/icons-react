import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pu3c7wbmz.css';
import '../../css/y/y8nllnb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="checkbox-checked-outlined"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="pu3c7wbmz"/><path class="y8nllnb_t"/></g></g>`,
		"fallback": "cuida:checkbox-checked-outlined",
	});
}

export default Component;
