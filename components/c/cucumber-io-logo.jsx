import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/c/cpvs1rbic.css';
import '../../css/g/gm5bzunuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="cpvs1rbic"/><path class="gm5bzunuw"/></g>`,
		"fallback": "streamline-logos:cucumber-io-logo",
	});
}

export default Component;
