import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1-dwjb4v.css';
import '../../css/e/eb8y78alh.css';
import '../../css/s/snrwjzxed.css';
import '../../css/r/r_0ztem8x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1-dwjb4v"/><path class="eb8y78alh"/><path class="snrwjzxed"/><path class="r_0ztem8x"/>`,
		"fallback": "thesvg-color:css",
	});
}

export default Component;
