import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkhn5jbgt.css';
import '../../css/d/dhw4upg8s.css';
import '../../css/z/zc_r19v3f.css';
import '../../css/y/y7nx7r7jd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkhn5jbgt"/><path class="dhw4upg8s"/><path class="zc_r19v3f"/><path class="y7nx7r7jd"/>`,
		"fallback": "energy-icons:construction-crane-20",
	});
}

export default Component;
