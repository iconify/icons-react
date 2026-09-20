import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fiugobc0l.css';
import '../../css/b/bc69m5bpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fiugobc0l"/><path class="bc69m5bpz"/>`,
		"fallback": "token:blur",
	});
}

export default Component;
