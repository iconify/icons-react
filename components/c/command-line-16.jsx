import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd48-oaxd.css';
import '../../css/x/xckz74v8f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vd48-oaxd"/><path clip-rule="evenodd" class="xckz74v8f"/>`,
		"fallback": "qlementine-icons:command-line-16",
	});
}

export default Component;
