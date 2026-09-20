import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n47rxdneh.css';
import '../../css/s/s6ae1bchi.css';
import '../../css/h/hbg0kobxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n47rxdneh"/><path class="s6ae1bchi"/><path class="hbg0kobxj"/></g>`,
		"fallback": "reicon:cpu-charge",
	});
}

export default Component;
