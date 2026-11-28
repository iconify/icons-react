import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/akqy0tg5u.css';
import '../../css/v/vcm53pb7r.css';
import '../../css/c/cvyjl4bpd.css';
import '../../css/q/qnmufby7n.css';
import '../../css/j/jqz7rpb0q.css';
import '../../css/d/dlobu9b6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="akqy0tg5u"/><path class="vcm53pb7r"/><path class="cvyjl4bpd"/><path class="qnmufby7n"/><path class="jqz7rpb0q"/><path class="dlobu9b6w"/></g>`,
		"fallback": "iconaut:cat",
	});
}

export default Component;
