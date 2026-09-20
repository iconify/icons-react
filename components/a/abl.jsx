import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwqtgebov.css';
import '../../css/q/q5d6wvbhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwqtgebov"/><path class="q5d6wvbhw"/>`,
		"fallback": "token:abl",
	});
}

export default Component;
