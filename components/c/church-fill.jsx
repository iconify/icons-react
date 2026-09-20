import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi_s3db9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi_s3db9y"/>`,
		"fallback": "mingcute:church-fill",
	});
}

export default Component;
