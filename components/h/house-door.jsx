import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak8bbzg-f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak8bbzg-f"/>`,
		"fallback": "bi:house-door",
	});
}

export default Component;
