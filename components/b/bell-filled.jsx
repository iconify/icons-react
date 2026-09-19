import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3iaynbsh.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3iaynbsh"/>`,
		"fallback": "ant-design:bell-filled",
	});
}

export default Component;
