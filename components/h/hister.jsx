import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqlk6jbjw.css';
import '../../css/c/cwmhkgfct.css';
import '../../css/k/k1v72ui6e.css';
import '../../css/m/mg0w4tf1u.css';
import '../../css/g/g62vtlbka.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqlk6jbjw"/><path class="cwmhkgfct"/><path class="k1v72ui6e"/><path class="mg0w4tf1u"/><path class="g62vtlbka"/>`,
		"fallback": "selfhst:hister",
	});
}

export default Component;
