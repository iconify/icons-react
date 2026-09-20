import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pmf812bru.css';
import '../../css/s/snvlk93dn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pmf812bru"/><path class="snvlk93dn"/></g>`,
		"fallback": "streamline-ultimate:hospital-sign",
	});
}

export default Component;
