import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0x804ply.css';
import '../../css/f/f8hzr132d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0x804ply"/><path class="f8hzr132d"/>`,
		"fallback": "carbon:document-comment",
	});
}

export default Component;
