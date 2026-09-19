import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9gu4yi6s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9gu4yi6s"/>`,
		"fallback": "fluent-emoji-flat:globe-with-meridians",
	});
}

export default Component;
