import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzevmeb7i.css';
import '../../css/q/q2sfcejqg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzevmeb7i"/><path class="q2sfcejqg"/>`,
		"fallback": "heroicons:inbox-arrow-down-16-solid",
	});
}

export default Component;
