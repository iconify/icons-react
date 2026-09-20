import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt7ztxbrk.css';
import '../../css/k/k-_v8bbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt7ztxbrk"/><path class="k-_v8bbjv"/>`,
		"fallback": "tdesign:hard-disk-storage-filled",
	});
}

export default Component;
