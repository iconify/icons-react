import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac5rx7nmm.css';
import '../../css/l/lts7tcach.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac5rx7nmm"/><path class="lts7tcach"/>`,
		"fallback": "energy-icons:bee-20",
	});
}

export default Component;
