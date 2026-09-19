import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu2grvbsv.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu2grvbsv"/>`,
		"fallback": "fluent-mdl2:document-approval",
	});
}

export default Component;
