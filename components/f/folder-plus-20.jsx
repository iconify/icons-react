import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk8kloxbh.css';
import '../../css/w/whglv-b6c.css';
import '../../css/t/tn9fdubiu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk8kloxbh"/><path class="whglv-b6c"/><path class="tn9fdubiu"/>`,
		"fallback": "energy-icons:folder-plus-20",
	});
}

export default Component;
