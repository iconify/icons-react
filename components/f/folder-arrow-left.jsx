import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6jxmcc1l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e6jxmcc1l"/>`,
		"fallback": "gravity-ui:folder-arrow-left",
	});
}

export default Component;
