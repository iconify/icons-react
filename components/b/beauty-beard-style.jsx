import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhl1isbvq.css';
import '../../css/s/sdbok-sel.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhl1isbvq"/><path class="sdbok-sel"/>`,
		"fallback": "streamline-pixel:beauty-beard-style",
	});
}

export default Component;
