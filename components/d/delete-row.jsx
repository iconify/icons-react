import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et74su9kq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et74su9kq"/>`,
		"fallback": "ant-design:delete-row",
	});
}

export default Component;
