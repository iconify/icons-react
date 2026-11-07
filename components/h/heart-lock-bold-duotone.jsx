import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e67gh4ytw.css';
import '../../css/e/ebl2e7rnn.css';
import '../../css/h/hlzr7r44e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e67gh4ytw"/><path class="ebl2e7rnn"/><path class="hlzr7r44e"/>`,
		"fallback": "solar:heart-lock-bold-duotone",
	});
}

export default Component;
