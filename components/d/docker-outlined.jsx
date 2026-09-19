import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osh-gp4ge.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osh-gp4ge"/>`,
		"fallback": "ant-design:docker-outlined",
	});
}

export default Component;
