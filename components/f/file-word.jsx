import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqm2w33oz.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqm2w33oz"/>`,
		"fallback": "ant-design:file-word",
	});
}

export default Component;
