import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a_33vdbgo.css';
import '../../css/o/obhrtwxnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a_33vdbgo"/><path class="obhrtwxnh"/></g>`,
		"fallback": "vadivam:git-compare-arrows",
	});
}

export default Component;
