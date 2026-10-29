import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcploob5p.css';
import '../../css/y/yqi9zhbgt.css';
import '../../css/k/kjsax0b1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcploob5p"/><path class="yqi9zhbgt"/><path class="kjsax0b1d"/>`,
		"fallback": "withicons-bauhaus:archive",
	});
}

export default Component;
