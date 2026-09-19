import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqxw4t2sy.css';
import '../../css/i/iq2exjbrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer hqxw4t2sy"/><path class="duoicon-primary-layer iq2exjbrp"/>`,
		"fallback": "duo-icons:briefcase",
	});
}

export default Component;
