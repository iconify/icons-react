import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikh-14usx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ikh-14usx"/>`,
		"fallback": "glyphs:battery-bolt-outline",
	});
}

export default Component;
