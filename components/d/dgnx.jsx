import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4rebd9gj.css';
import '../../css/x/xlas5tb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4rebd9gj"/><path class="xlas5tb-j"/>`,
		"fallback": "token:dgnx",
	});
}

export default Component;
