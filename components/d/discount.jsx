import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ueef18k6a.css';
import '../../css/u/uvw242b-s.css';
import '../../css/j/j7qjn6psg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ueef18k6a"/><path class="uvw242b-s"/><path class="j7qjn6psg"/></g>`,
		"fallback": "tabler:discount",
	});
}

export default Component;
