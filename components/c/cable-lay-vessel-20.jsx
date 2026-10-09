import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghdyryixw.css';
import '../../css/n/n_bg76bsh.css';
import '../../css/q/qva2skqil.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghdyryixw"/><path class="n_bg76bsh"/><path class="qva2skqil"/>`,
		"fallback": "energy-icons:cable-lay-vessel-20",
	});
}

export default Component;
