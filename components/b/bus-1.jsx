import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hjz-6wm1o.css';
import '../../css/m/mm5j8mbhe.css';
import '../../css/i/i4rbuzb6u.css';
import '../../css/a/a1yq4tsld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hjz-6wm1o"/><path class="mm5j8mbhe"/><path class="i4rbuzb6u"/><path class="a1yq4tsld"/></g>`,
		"fallback": "streamline-ultimate:bus-1",
	});
}

export default Component;
