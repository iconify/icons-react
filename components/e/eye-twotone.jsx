import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwwc2ab5u.css';
import '../../css/x/xfn8r9bjr.css';
import '../../css/f/fma9jpbyl.css';
import '../../css/t/t4em2zgug.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwwc2ab5u"/><path class="xfn8r9bjr"/><path class="fma9jpbyl"/><path class="t4em2zgug"/>`,
		"fallback": "ant-design:eye-twotone",
	});
}

export default Component;
