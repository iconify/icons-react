import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_fc_bb1g.css';
import '../../css/m/mo96-mi7j.css';
import '../../css/a/as7o-d6nf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_fc_bb1g"/><path class="mo96-mi7j"/><path class="as7o-d6nf"/>`,
		"fallback": "selfhst:beaver-habit-tracker",
	});
}

export default Component;
