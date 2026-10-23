import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q2e-fn9vd.css';
import '../../css/b/bbhg4hbom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q2e-fn9vd"/><path class="bbhg4hbom"/></g>`,
		"fallback": "vadivam:cat",
	});
}

export default Component;
