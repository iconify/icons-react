import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/niele7ihp.css';
import '../../css/o/o2ijbbb7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="niele7ihp"/><path class="o2ijbbb7z"/></g>`,
		"fallback": "tabler:building-stadium",
	});
}

export default Component;
