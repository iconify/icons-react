import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruak_pb9u.css';
import '../../css/k/k4jt908-j.css';
import '../../css/y/ycq0hybqw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruak_pb9u"/><path class="k4jt908-j"/><path class="ycq0hybqw"/>`,
		"fallback": "fluent-emoji-high-contrast:boy",
	});
}

export default Component;
