import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o54lhwbsx.css';
import '../../css/c/ceitnjb9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o54lhwbsx"/><circle class="ceitnjb9j"/></g>`,
		"fallback": "majesticons:git-merge-line",
	});
}

export default Component;
