import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt4rwqbhp.css';
import '../../css/e/ekmyd2l1t.css';
import '../../css/o/olgt4becl.css';
import '../../css/u/ujf-0j9rf.css';
import '../../css/s/sfb8rqn9v.css';
import '../../css/k/ksydp3lsw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt4rwqbhp"/><path class="ekmyd2l1t"/><path class="olgt4becl"/><path class="ujf-0j9rf"/><path class="sfb8rqn9v"/><path class="ksydp3lsw"/>`,
		"fallback": "energy-icons:hydrogen-tank-x-48-bold",
	});
}

export default Component;
