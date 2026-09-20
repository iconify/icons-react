import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esgpznmzg.css';
import '../../css/q/q67cq2bhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esgpznmzg"/><path class="q67cq2bhh"/>`,
		"fallback": "token:gdcc",
	});
}

export default Component;
