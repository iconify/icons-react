import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/smxycjv8r.css';
import '../../css/y/yg5kv2hph.css';
import '../../css/o/o3owdebtz.css';
import '../../css/w/wpt4tnb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="smxycjv8r"/><path class="yg5kv2hph"/><path class="o3owdebtz"/><path class="wpt4tnb6g"/></g>`,
		"fallback": "solar:chair-2-linear",
	});
}

export default Component;
