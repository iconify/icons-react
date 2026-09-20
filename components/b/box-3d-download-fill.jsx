import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c920uovqf.css';
import '../../css/o/okq-o-r4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c920uovqf"/><path class="okq-o-r4v"/>`,
		"fallback": "mage:box-3d-download-fill",
	});
}

export default Component;
