import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/smxycjv8r.css';
import '../../css/y/yg5kv2hph.css';
import '../../css/a/axx9m59wr.css';
import '../../css/r/rfavqvugw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="smxycjv8r"/><path class="yg5kv2hph"/><path class="axx9m59wr"/><path class="rfavqvugw"/></g>`,
		"fallback": "solar:chair-2-line-duotone",
	});
}

export default Component;
