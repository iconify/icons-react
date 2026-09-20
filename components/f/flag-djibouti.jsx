import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnqa97brp.css';
import '../../css/l/lx7mkia0m.css';
import '../../css/o/oirwttbcl.css';
import '../../css/o/o5pp98bzx.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnqa97brp"/><path class="lx7mkia0m"/><path class="oirwttbcl"/><path class="o5pp98bzx"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-djibouti",
	});
}

export default Component;
