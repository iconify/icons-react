import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqubvn-gw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqubvn-gw"/>`,
		"fallback": "vadivam:heading-2",
	});
}

export default Component;
