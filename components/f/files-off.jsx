import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w-ytxabdb.css';
import '../../css/y/y2xm8ib1d.css';
import '../../css/n/nc__2qbke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w-ytxabdb"/><path class="y2xm8ib1d"/><path class="nc__2qbke"/></g>`,
		"fallback": "tabler:files-off",
	});
}

export default Component;
