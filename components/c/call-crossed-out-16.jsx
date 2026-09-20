import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ura_37b8i.css';
import '../../css/y/y71wou8xx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ura_37b8i"/><path class="y71wou8xx"/>`,
		"fallback": "qlementine-icons:call-crossed-out-16",
	});
}

export default Component;
