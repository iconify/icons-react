import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/z/z2_norb-c.css';
import '../../css/a/adn0nip1q.css';
import '../../css/k/knlhs7bea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="z2_norb-c"/><path class="adn0nip1q"/><path class="knlhs7bea"/></g>`,
		"fallback": "streamline-cyber:business-male-megaphone",
	});
}

export default Component;
