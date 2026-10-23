import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z5xunnchc.css';
import '../../css/z/z4iwqzxda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z5xunnchc"/><path class="z4iwqzxda"/></g>`,
		"fallback": "vadivam:folder-cog",
	});
}

export default Component;
