import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lrua8-bic.css';
import '../../css/z/z4iwqzxda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lrua8-bic"/><path class="z4iwqzxda"/></g>`,
		"fallback": "vadivam:columns-3-cog",
	});
}

export default Component;
