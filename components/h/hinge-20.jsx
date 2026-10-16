import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r06i5gaqp.css';
import '../../css/z/zk-ob16tw.css';
import '../../css/l/lhz7cds8r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r06i5gaqp"/><path class="zk-ob16tw"/><path class="lhz7cds8r"/>`,
		"fallback": "energy-icons:hinge-20",
	});
}

export default Component;
