import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g67g2gbzi.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g67g2gbzi"/>`,
		"fallback": "ant-design:file-jpg-outline",
	});
}

export default Component;
