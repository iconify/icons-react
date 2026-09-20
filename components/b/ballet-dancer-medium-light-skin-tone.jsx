import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpyqy236k.css';
import '../../css/p/psoxzhwrb.css';
import '../../css/w/w9di_5vkl.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/y/yv-iidcey.css';
import '../../css/e/eng_2eenz.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="matrix(-1 0 0 1 68.04 0)" class="wpyqy236k"><circle class="psoxzhwrb"/><path class="w9di_5vkl"/></g><g transform="matrix(-1 0 0 1 68.04 0)" class="brzn_0bpr"><circle class="yv-iidcey"/><path class="eng_2eenz"/></g>`,
		"fallback": "openmoji:ballet-dancer-medium-light-skin-tone",
	});
}

export default Component;
