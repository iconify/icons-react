import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p52u5b7hp.css';
import '../../css/f/f7q9a2bck.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p52u5b7hp"/><path class="f7q9a2bck"/>`,
		"fallback": "energy-icons:close-20",
	});
}

export default Component;
