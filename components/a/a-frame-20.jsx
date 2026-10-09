import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/artiuobsj.css';
import '../../css/u/u815dwbzl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="artiuobsj"/><path class="u815dwbzl"/>`,
		"fallback": "energy-icons:a-frame-20",
	});
}

export default Component;
