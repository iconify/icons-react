import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1k8sqa5d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t1k8sqa5d"/>`,
		"fallback": "streamline:hot-spring-remix",
	});
}

export default Component;
