import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e57ewnc3h.css';
import '../../css/c/ctzgkpf1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e57ewnc3h"/><path class="ctzgkpf1i"/>`,
		"fallback": "stash:calendar-end-solid",
	});
}

export default Component;
