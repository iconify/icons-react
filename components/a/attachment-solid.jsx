import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8xd7l3mw.css';
import '../../css/e/emm9ff-2t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8xd7l3mw"/><path clip-rule="evenodd" class="emm9ff-2t"/>`,
		"fallback": "teenyicons:attachment-solid",
	});
}

export default Component;
