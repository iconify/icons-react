import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dur0b2p3t.css';
import '../../css/p/pi7jdd7uf.css';
import '../../css/b/bzun-yi8p.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dur0b2p3t"/><path class="pi7jdd7uf"/><path class="bzun-yi8p"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-chad",
	});
}

export default Component;
