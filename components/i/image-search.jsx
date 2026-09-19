import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_p8_75bi.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_p8_75bi"/>`,
		"fallback": "fluent-mdl2:image-search",
	});
}

export default Component;
