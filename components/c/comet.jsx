import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttl3jw3ji.css';
import '../../css/d/d-iomq1yk.css';
import '../../css/s/s8__lib7p.css';
import '../../css/u/uqsxzzarz.css';
import '../../css/u/ug955bcth.css';
import '../../css/u/u6p-wz-rz.css';
import '../../css/o/o0091sb1i.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse transform="rotate(-25.837 20.767 48.407)" class="ttl3jw3ji"/><path class="d-iomq1yk"/><path class="s8__lib7p"/><path class="uqsxzzarz"/><path class="ug955bcth"/><path class="u6p-wz-rz"/><path class="o0091sb1i"/>`,
		"fallback": "openmoji:comet",
	});
}

export default Component;
