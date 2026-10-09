import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9dzyiszx.css';
import '../../css/h/hfunc-u9d.css';
import '../../css/v/vm6ftdb4b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9dzyiszx"/><path class="hfunc-u9d"/><path class="vm6ftdb4b"/>`,
		"fallback": "energy-icons:bolt-x-20",
	});
}

export default Component;
