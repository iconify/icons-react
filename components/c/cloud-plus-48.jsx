import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m77m-bb1r.css';
import '../../css/f/f5bqv3-2b.css';
import '../../css/d/dq0waab5c.css';
import '../../css/y/yoxyoac9f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m77m-bb1r"/><path class="f5bqv3-2b"/><path class="dq0waab5c"/><path class="yoxyoac9f"/>`,
		"fallback": "energy-icons:cloud-plus-48",
	});
}

export default Component;
