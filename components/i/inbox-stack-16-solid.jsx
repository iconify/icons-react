import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/had4r1bdj.css';
import '../../css/w/wjz6iob6a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="had4r1bdj"/><path class="wjz6iob6a"/>`,
		"fallback": "heroicons:inbox-stack-16-solid",
	});
}

export default Component;
