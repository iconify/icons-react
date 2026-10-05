import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/u/u59vj0byr.css';
import '../../css/p/pvyu0vgcm.css';
import '../../css/b/b5sne2bxw.css';
import '../../css/i/ipsrlibww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="u59vj0byr"/><path class="pvyu0vgcm"/><path class="b5sne2bxw"/><path class="ipsrlibww"/></g>`,
		"fallback": "matita:git-branch",
	});
}

export default Component;
