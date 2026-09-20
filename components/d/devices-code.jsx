import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/osy7eu3xp.css';
import '../../css/f/fbcg8rb-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="osy7eu3xp"/><path class="fbcg8rb-k"/></g>`,
		"fallback": "tabler:devices-code",
	});
}

export default Component;
