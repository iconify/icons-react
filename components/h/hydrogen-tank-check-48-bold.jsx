import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt4rwqbhp.css';
import '../../css/e/ekmyd2l1t.css';
import '../../css/o/olgt4becl.css';
import '../../css/u/ujf-0j9rf.css';
import '../../css/y/y9mg2tbzu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt4rwqbhp"/><path class="ekmyd2l1t"/><path class="olgt4becl"/><path class="ujf-0j9rf"/><path class="y9mg2tbzu"/>`,
		"fallback": "energy-icons:hydrogen-tank-check-48-bold",
	});
}

export default Component;
