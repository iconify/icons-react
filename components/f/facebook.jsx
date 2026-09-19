import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0m87kb6d.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0m87kb6d"/>`,
		"fallback": "ant-design:facebook",
	});
}

export default Component;
