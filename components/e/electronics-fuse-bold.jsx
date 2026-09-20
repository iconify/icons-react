import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6hq5bt1d.css';
import '../../css/m/m-9tadk8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6hq5bt1d"/><path class="m-9tadk8j"/>`,
		"fallback": "streamline-ultimate:electronics-fuse-bold",
	});
}

export default Component;
