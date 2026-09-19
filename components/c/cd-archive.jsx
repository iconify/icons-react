import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny7pffhya.css';
import '../../css/h/h4zwanbgt.css';
import '../../css/e/e39ud6bwf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny7pffhya"/><path class="h4zwanbgt"/><circle class="e39ud6bwf"/>`,
		"fallback": "carbon:cd-archive",
	});
}

export default Component;
