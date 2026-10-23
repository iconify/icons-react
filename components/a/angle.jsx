import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/spy_3tv4z.css';
import '../../css/a/abetfi3mo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="spy_3tv4z"/><path class="abetfi3mo"/></g>`,
		"fallback": "vadivam:angle",
	});
}

export default Component;
