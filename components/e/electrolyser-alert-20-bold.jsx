import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpmwuwmjc.css';
import '../../css/u/u4fuhyw5r.css';
import '../../css/a/aqsnv9bnd.css';
import '../../css/j/jeyqzjnhx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpmwuwmjc"/><path class="u4fuhyw5r"/><path class="aqsnv9bnd"/><path class="jeyqzjnhx"/>`,
		"fallback": "energy-icons:electrolyser-alert-20-bold",
	});
}

export default Component;
