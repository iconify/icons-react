import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kucap5bva.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kucap5bva"/>`,
		"fallback": "gravity-ui:folder-arrow-down",
	});
}

export default Component;
