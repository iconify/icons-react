import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r33ho4bgm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r33ho4bgm"/>`,
		"fallback": "gravity-ui:arrow-up-from-line",
	});
}

export default Component;
