import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-eltu37y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g-eltu37y"/>`,
		"fallback": "gravity-ui:arrow-shape-down-from-line",
	});
}

export default Component;
