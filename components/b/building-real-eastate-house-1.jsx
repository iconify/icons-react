import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmp4o6v6i.css';
import '../../css/w/wlilhubec.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmp4o6v6i"/><path class="wlilhubec"/>`,
		"fallback": "streamline-pixel:building-real-eastate-house-1",
	});
}

export default Component;
