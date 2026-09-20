import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w-ytxabdb.css';
import '../../css/t/tsomvtsbn.css';
import '../../css/v/v004r_iyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w-ytxabdb"/><path class="tsomvtsbn"/><path class="v004r_iyx"/></g>`,
		"fallback": "tabler:files",
	});
}

export default Component;
