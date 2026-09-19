import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbu2i64xd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbu2i64xd"/>`,
		"fallback": "file-icons:haxe",
	});
}

export default Component;
