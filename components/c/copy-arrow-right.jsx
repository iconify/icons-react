import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxb2f-u5j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qxb2f-u5j"/>`,
		"fallback": "gravity-ui:copy-arrow-right",
	});
}

export default Component;
