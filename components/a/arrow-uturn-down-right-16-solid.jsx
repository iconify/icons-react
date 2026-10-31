import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/diqex1eyy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="diqex1eyy"/>`,
		"fallback": "sidekickicons:arrow-uturn-down-right-16-solid",
	});
}

export default Component;
