import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prq31rbnp.css';
import '../../css/u/u-0d80bqe.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prq31rbnp"/><path class="u-0d80bqe"/>`,
		"fallback": "ant-design:fund-projection-screen",
	});
}

export default Component;
