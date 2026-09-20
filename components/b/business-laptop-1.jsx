import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/k/k5ssipv8t.css';
import '../../css/t/txypl8bnr.css';
import '../../css/p/p8byw9pyu.css';
import '../../css/g/gq-eyxb-r.css';
import '../../css/d/dj7o5pbgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="k5ssipv8t"/><path class="txypl8bnr"/><path class="p8byw9pyu"/><path class="gq-eyxb-r"/><path class="dj7o5pbgx"/></g>`,
		"fallback": "streamline-cyber:business-laptop-1",
	});
}

export default Component;
