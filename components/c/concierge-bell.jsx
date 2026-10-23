import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xge3s_bpm.css';
import '../../css/t/t53_yfbim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xge3s_bpm"/><path class="t53_yfbim"/></g>`,
		"fallback": "vadivam:concierge-bell",
	});
}

export default Component;
