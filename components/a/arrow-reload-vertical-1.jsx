import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/n/n289phbfh.css';
import '../../css/l/lrh8l26vj.css';
import '../../css/a/akqahh3wn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="n289phbfh"/><path class="lrh8l26vj"/><path class="akqahh3wn"/></g>`,
		"fallback": "streamline-color:arrow-reload-vertical-1",
	});
}

export default Component;
