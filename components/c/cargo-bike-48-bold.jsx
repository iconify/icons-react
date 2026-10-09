import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x673fkv0u.css';
import '../../css/g/ghqak4bvs.css';
import '../../css/e/ec0d-j14t.css';
import '../../css/d/dg7d3thnd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x673fkv0u"/><path class="ghqak4bvs"/><path class="ec0d-j14t"/><path class="dg7d3thnd"/>`,
		"fallback": "energy-icons:cargo-bike-48-bold",
	});
}

export default Component;
