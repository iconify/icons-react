import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/ha9xtnb5j.css';
import '../../css/a/a3mdr8f8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ha9xtnb5j"/><path class="a3mdr8f8w"/></g>`,
		"fallback": "tabler:christmas-ball",
	});
}

export default Component;
