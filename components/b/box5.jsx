import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gcwqm4-4k.css';
import '../../css/o/onj7-8bpi.css';
import '../../css/b/bmx5s7b7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gcwqm4-4k"/><path class="onj7-8bpi"/><path class="bmx5s7b7o"/></g>`,
		"fallback": "reicon:box5",
	});
}

export default Component;
