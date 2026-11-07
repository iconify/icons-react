import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iarzmjb8m.css';
import '../../css/g/ge7vrqbtr.css';
import '../../css/l/lxq4dhkod.css';
import '../../css/s/s2-2a1b2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iarzmjb8m"/><path clip-rule="evenodd" class="ge7vrqbtr"/><path class="lxq4dhkod"/><path clip-rule="evenodd" class="s2-2a1b2n"/>`,
		"fallback": "solar:airbuds-right-bold",
	});
}

export default Component;
