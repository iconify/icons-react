import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yca151kvg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yca151kvg"/>`,
		"fallback": "gravity-ui:circle-xmark-fill",
	});
}

export default Component;
