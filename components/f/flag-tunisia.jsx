import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/u/ud3dsh8zy.css';
import '../../css/g/g-4znmb1j.css';
import '../../css/z/z6fs5vb8t.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><circle class="ud3dsh8zy"/><path class="g-4znmb1j"/><path class="z6fs5vb8t"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-tunisia",
	});
}

export default Component;
