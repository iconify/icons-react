import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7juawdew.css';
import '../../css/v/v0h2-7bys.css';
import '../../css/c/ctzl9ackg.css';
import '../../css/p/psrlxpb8u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7juawdew"/><path class="v0h2-7bys"/><path class="ctzl9ackg"/><path class="psrlxpb8u"/>`,
		"fallback": "energy-icons:house-key-20",
	});
}

export default Component;
