import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iitdx4b4n.css';
import '../../css/e/egm87yb8i.css';
import '../../css/o/oen_blbax.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iitdx4b4n"/><path class="egm87yb8i"/><path class="oen_blbax"/>`,
		"fallback": "selfhst:domain-monitor-light",
	});
}

export default Component;
