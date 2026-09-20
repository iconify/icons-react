import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohcqs1rls.css';

const viewBox = {"width":24,"height":24,"left":-4.5,"top":-7};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohcqs1rls"/>`,
		"fallback": "jam:header-6",
	});
}

export default Component;
