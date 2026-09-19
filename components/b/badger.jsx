import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yle_ezbbl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yle_ezbbl"/>`,
		"fallback": "fluent-emoji-high-contrast:badger",
	});
}

export default Component;
