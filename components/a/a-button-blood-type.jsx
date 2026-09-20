import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrasw9bbm.css';
import '../../css/i/in5wtwq8h.css';
import '../../css/l/lgruf5j3n.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wrasw9bbm"/><path class="in5wtwq8h"/><path class="lgruf5j3n"/><path class="e4zfowz9r"/>`,
		"fallback": "openmoji:a-button-blood-type",
	});
}

export default Component;
