import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpaff3kmy.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpaff3kmy"/>`,
		"fallback": "ant-design:disconnect",
	});
}

export default Component;
