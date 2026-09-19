import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tufwqtb_o.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tufwqtb_o"/>`,
		"fallback": "dinkie-icons:ballot-box-with-check-small",
	});
}

export default Component;
