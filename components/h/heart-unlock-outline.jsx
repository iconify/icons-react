import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebl2e7rnn.css';
import '../../css/o/oj866ibnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebl2e7rnn"/><path clip-rule="evenodd" class="oj866ibnr"/>`,
		"fallback": "solar:heart-unlock-outline",
	});
}

export default Component;
