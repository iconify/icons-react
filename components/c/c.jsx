import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzhaf9bvh.css';
import '../../css/f/ffyk6os7s.css';
import '../../css/m/m1ojfhsdd.css';
import '../../css/a/ac9aihdmz.css';
import '../../css/s/s2bv4t-pq.css';
import '../../css/a/a4yjhac0d.css';
import '../../css/n/n60qy3ekt.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzhaf9bvh"/><path class="ffyk6os7s"/><path class="m1ojfhsdd"/><path class="ac9aihdmz"/><path class="s2bv4t-pq"/><path class="a4yjhac0d"/><path class="n60qy3ekt"/>`,
		"fallback": "openmoji:c",
	});
}

export default Component;
