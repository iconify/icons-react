import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kgtiopk3b.css';
import '../../css/n/nivrvsons.css';
import '../../css/q/q3oymybho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kgtiopk3b"/><path class="nivrvsons"/><path class="q3oymybho"/></g>`,
		"fallback": "streamline-ultimate:amusement-park-ferris-wheel",
	});
}

export default Component;
