import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fivtch93m.css';
import '../../css/c/ctzgkpf1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fivtch93m"/><path class="ctzgkpf1i"/>`,
		"fallback": "stash:calendar-nine-solid",
	});
}

export default Component;
