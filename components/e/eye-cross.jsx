import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwoo8gbut.css';
import '../../css/t/t5xij2brj.css';
import '../../css/y/y8jo2vbjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwoo8gbut"/><path class="t5xij2brj"/><path class="y8jo2vbjk"/>`,
		"fallback": "pixel:eye-cross",
	});
}

export default Component;
