import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebl2e7rnn.css';
import '../../css/n/n84cny5hn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebl2e7rnn"/><path clip-rule="evenodd" class="n84cny5hn"/>`,
		"fallback": "solar:heart-lock-outline",
	});
}

export default Component;
