import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cibmyoejo.css';
import '../../css/t/tj7kutb3g.css';
import '../../css/t/t0c6ekb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cibmyoejo"/><path class="tj7kutb3g"/><path class="t0c6ekb-i"/>`,
		"fallback": "token:cos",
	});
}

export default Component;
