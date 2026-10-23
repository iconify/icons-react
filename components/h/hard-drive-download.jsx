import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ur2or0bhz.css';
import '../../css/j/j-6ymabce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ur2or0bhz"/><path class="j-6ymabce"/></g>`,
		"fallback": "vadivam:hard-drive-download",
	});
}

export default Component;
