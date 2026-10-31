import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bi4b6bcql.css';
import '../../css/f/ft6s3wbhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bi4b6bcql"/><path class="ft6s3wbhe"/></g>`,
		"fallback": "coolicons:folders-duocolor-round",
	});
}

export default Component;
