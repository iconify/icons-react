import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz_955bse.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz_955bse"/>`,
		"fallback": "ant-design:file-text-outline",
	});
}

export default Component;
