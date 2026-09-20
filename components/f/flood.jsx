import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj54ll90s.css';
import '../../css/n/nxzuqf7tr.css';
import '../../css/r/rds-sv7pp.css';
import '../../css/u/uyrysvt3k.css';
import '../../css/l/lhiif9hem.css';
import '../../css/q/q3g9qac4w.css';
import '../../css/g/gsb2qybke.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj54ll90s"/><path class="nxzuqf7tr"/><path class="rds-sv7pp"/><path class="uyrysvt3k"/><path class="lhiif9hem"/><path class="q3g9qac4w"/><path class="gsb2qybke"/>`,
		"fallback": "openmoji:flood",
	});
}

export default Component;
