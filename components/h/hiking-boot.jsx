import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukwwe_bgv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukwwe_bgv"/>`,
		"fallback": "fluent-emoji-high-contrast:hiking-boot",
	});
}

export default Component;
