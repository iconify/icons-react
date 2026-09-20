import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glj_s2bdu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glj_s2bdu"/>`,
		"fallback": "simple-line-icons:control-forward",
	});
}

export default Component;
