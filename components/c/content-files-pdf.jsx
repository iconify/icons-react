import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oot5ivbbj.css';
import '../../css/n/n3wlgc-qo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oot5ivbbj"/><path class="n3wlgc-qo"/>`,
		"fallback": "streamline-pixel:content-files-pdf",
	});
}

export default Component;
