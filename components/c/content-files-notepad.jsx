import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz5tfxbtx.css';
import '../../css/l/l0ryvi2pe.css';
import '../../css/u/ug6nvcb0n.css';
import '../../css/e/exbu-tbth.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz5tfxbtx"/><path class="l0ryvi2pe"/><path class="ug6nvcb0n"/><path class="exbu-tbth"/>`,
		"fallback": "streamline-pixel:content-files-notepad",
	});
}

export default Component;
