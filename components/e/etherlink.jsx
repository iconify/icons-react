import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxy5hxwwj.css';
import '../../css/b/b-ya-zbvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxy5hxwwj"/><path class="b-ya-zbvy"/>`,
		"fallback": "token:etherlink",
	});
}

export default Component;
