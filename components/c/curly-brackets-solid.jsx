import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss2me_b3b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ss2me_b3b"/>`,
		"fallback": "streamline:curly-brackets-solid",
	});
}

export default Component;
