import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4i-kyblv.css';
import '../../css/b/bjt9-ygkq.css';
import '../../css/x/xzmpbzbog.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4i-kyblv"/><path class="bjt9-ygkq"/><path class="xzmpbzbog"/>`,
		"fallback": "streamline-pixel:beauty-mirror-1",
	});
}

export default Component;
