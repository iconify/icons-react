import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qexr5hbzp.css';
import '../../css/k/k3aceftav.css';
import '../../css/u/u7aibobtw.css';
import '../../css/u/unlqz5bhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qexr5hbzp"/><path class="k3aceftav"/><path class="u7aibobtw"/><path class="unlqz5bhw"/>`,
		"fallback": "thesvg-color:doubao",
	});
}

export default Component;
