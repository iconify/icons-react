import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg_kyn8ep.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg_kyn8ep"/>`,
		"fallback": "carbon:flag",
	});
}

export default Component;
