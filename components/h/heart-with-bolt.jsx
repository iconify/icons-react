import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq80f2hmm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kq80f2hmm"/>`,
		"fallback": "pinhead:heart-with-bolt",
	});
}

export default Component;
