import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7ejribor.css';
import '../../css/u/urh8tubap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r7ejribor"/><path class="urh8tubap"/>`,
		"fallback": "token:dose",
	});
}

export default Component;
