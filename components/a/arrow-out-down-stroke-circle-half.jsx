import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijupqacst.css';
import '../../css/w/waapkib7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijupqacst"/><path class="waapkib7u"/>`,
		"fallback": "boxicons:arrow-out-down-stroke-circle-half",
	});
}

export default Component;
