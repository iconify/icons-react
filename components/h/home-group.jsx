import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu1_2j5-d.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu1_2j5-d"/>`,
		"fallback": "fluent-mdl2:home-group",
	});
}

export default Component;
