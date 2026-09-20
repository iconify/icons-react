import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqs0lyb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqs0lyb5g"/>`,
		"fallback": "thesvg-color:30-seconds-of-code",
	});
}

export default Component;
