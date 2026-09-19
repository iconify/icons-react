import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp83qqbsc.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp83qqbsc"/>`,
		"fallback": "ant-design:border-outer",
	});
}

export default Component;
