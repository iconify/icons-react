import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny-3uobra.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ny-3uobra"/>`,
		"fallback": "heroicons:clipboard-16-solid",
	});
}

export default Component;
