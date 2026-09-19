import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltnl8vnnv.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltnl8vnnv"/>`,
		"fallback": "ant-design:font-size-outlined",
	});
}

export default Component;
