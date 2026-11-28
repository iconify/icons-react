import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bajt83jld.css';
import '../../css/z/zqedzh64t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bajt83jld"/><path class="zqedzh64t"/></g>`,
		"fallback": "iconaut:egg",
	});
}

export default Component;
