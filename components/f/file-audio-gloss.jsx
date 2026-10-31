import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1lht_bqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1lht_bqn"/>`,
		"fallback": "withicons:file-audio-gloss",
	});
}

export default Component;
