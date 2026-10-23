import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h5_w7nbto.css';
import '../../css/a/axiyi_uig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h5_w7nbto"/><path class="axiyi_uig"/></g>`,
		"fallback": "vadivam:folders",
	});
}

export default Component;
