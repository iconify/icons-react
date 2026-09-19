import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h66-yoa9l.css';
import '../../css/w/w-bvnpfvp.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h66-yoa9l"/><path class="w-bvnpfvp"/>`,
		"fallback": "ant-design:group",
	});
}

export default Component;
