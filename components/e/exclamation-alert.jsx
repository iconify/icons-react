import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oljebpb3g.css';
import '../../css/y/y_g1oe_0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oljebpb3g"/><path class="y_g1oe_0f"/>`,
		"fallback": "stash:exclamation-alert",
	});
}

export default Component;
