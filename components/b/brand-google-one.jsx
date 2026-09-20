import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fbvhdob4u.css';
import '../../css/w/wogwu_b4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fbvhdob4u"/><path class="wogwu_b4a"/></g>`,
		"fallback": "tabler:brand-google-one",
	});
}

export default Component;
