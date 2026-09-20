import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zthqgccvh.css';
import '../../css/y/yjlbjealt.css';
import '../../css/y/yn8ss11ix.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zthqgccvh"/><path class="yjlbjealt"/><path class="yn8ss11ix"/>`,
		"fallback": "streamline-pixel:coding-apps-websites-finder",
	});
}

export default Component;
