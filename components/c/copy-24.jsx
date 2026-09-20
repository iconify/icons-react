import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyi633vpj.css';
import '../../css/c/cbt8elbze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyi633vpj"/><path clip-rule="evenodd" class="cbt8elbze"/>`,
		"fallback": "qlementine-icons:copy-24",
	});
}

export default Component;
