import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzr16bc8h.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzr16bc8h"/>`,
		"fallback": "fluent-mdl2:erase-tool",
	});
}

export default Component;
