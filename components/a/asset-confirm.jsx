import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkcrs2b2j.css';
import '../../css/h/hrklssb5j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkcrs2b2j"/><path class="hrklssb5j"/>`,
		"fallback": "carbon:asset-confirm",
	});
}

export default Component;
