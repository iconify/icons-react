import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_qcc4bjy.css';
import '../../css/s/s2u7zvnem.css';
import '../../css/w/w13sax6_i.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_qcc4bjy"/><path class="s2u7zvnem"/><path class="w13sax6_i"/>`,
		"fallback": "ant-design:console-sql-outlined",
	});
}

export default Component;
