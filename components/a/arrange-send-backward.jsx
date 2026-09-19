import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8h5xmbhn.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8h5xmbhn"/>`,
		"fallback": "fluent-mdl2:arrange-send-backward",
	});
}

export default Component;
