import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nye6a6pnu.css';
import '../../css/j/jez9isbih.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nye6a6pnu"/><path clip-rule="evenodd" class="jez9isbih"/>`,
		"fallback": "heroicons:camera-16-solid",
	});
}

export default Component;
