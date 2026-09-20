import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdbe0jb8m.css';
import '../../css/e/e81gp9j4k.css';
import '../../css/t/t5i68m3nl.css';
import '../../css/h/hr89nlblo.css';
import '../../css/o/obfjfz9tz.css';
import '../../css/n/n7tjf2whv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdbe0jb8m"/><path class="e81gp9j4k"/><path class="t5i68m3nl"/><circle transform="rotate(-80.781 256.004 228.196)" class="hr89nlblo"/><path class="obfjfz9tz"/><path class="n7tjf2whv"/>`,
		"fallback": "selfhst:geopulse-dark",
	});
}

export default Component;
