import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/k/kk0b6wf2q.css';
import '../../css/u/u4qj0eb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="kk0b6wf2q"/><path class="u4qj0eb8d"/></g>`,
		"fallback": "streamline-logos:egnyte-logo",
	});
}

export default Component;
