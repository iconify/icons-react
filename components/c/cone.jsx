import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o8ymjrl3o.css';
import '../../css/a/a7ig5u7yq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o8ymjrl3o"/><path class="a7ig5u7yq"/></g>`,
		"fallback": "vadivam:cone",
	});
}

export default Component;
