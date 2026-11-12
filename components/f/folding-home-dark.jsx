import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n994l0bwh.css';
import '../../css/m/m8oedpi-c.css';
import '../../css/c/cv53nesno.css';
import '../../css/d/doinghttg.css';
import '../../css/p/p6pn5jkia.css';
import '../../css/z/zyhaih_og.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n994l0bwh"/><path class="m8oedpi-c"/><path class="cv53nesno"/><path class="doinghttg"/><path class="p6pn5jkia"/><path class="zyhaih_og"/>`,
		"fallback": "selfhst:folding-home-dark",
	});
}

export default Component;
