import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc_77l01p.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc_77l01p"/>`,
		"fallback": "ant-design:container-outlined",
	});
}

export default Component;
