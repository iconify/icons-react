import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebl2e7rnn.css';
import '../../css/a/ae3wunbcx.css';
import '../../css/e/e67gh4ytw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebl2e7rnn"/><path class="ae3wunbcx"/><path clip-rule="evenodd" class="e67gh4ytw"/>`,
		"fallback": "solar:heart-unlock-bold-duotone",
	});
}

export default Component;
