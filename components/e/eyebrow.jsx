import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onwip71vm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onwip71vm"/>`,
		"fallback": "pinhead:eyebrow",
	});
}

export default Component;
