import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/q/q7nwfvbkq.css';
import '../../css/d/dkwns0boj.css';
import '../../css/g/geuvczi2n.css';
import '../../css/b/b43m768zs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG97xz0cWz"><g class="v3_i3wktz"><path class="q7nwfvbkq"/><path class="dkwns0boj"/><path class="geuvczi2n"/><path class="b43m768zs"/></g></mask></defs><path mask="url(#SVG97xz0cWz)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:handheld",
	});
}

export default Component;
