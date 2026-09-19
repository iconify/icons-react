import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcxg7mqrc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcxg7mqrc"/>`,
		"fallback": "carbon:assignment-action-usage",
	});
}

export default Component;
