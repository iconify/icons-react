import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud6ptt55l.css';
import '../../css/r/r25w052qd.css';
import '../../css/f/frsxhf9nd.css';
import '../../css/g/gchhiqbgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud6ptt55l"/><path class="r25w052qd"/><path class="frsxhf9nd"/><path class="gchhiqbgt"/>`,
		"fallback": "solar:chat-square-code-bold-duotone",
	});
}

export default Component;
