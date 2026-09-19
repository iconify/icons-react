import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuk6t8bzw.css';
import '../../css/n/nxma1vbuk.css';
import '../../css/x/xaosrk3sy.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuk6t8bzw"/><path class="nxma1vbuk"/><path class="xaosrk3sy"/>`,
		"fallback": "ant-design:carry-out-twotone",
	});
}

export default Component;
