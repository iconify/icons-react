import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znhln2gbu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znhln2gbu"/>`,
		"fallback": "ant-design:file-excel-outline",
	});
}

export default Component;
