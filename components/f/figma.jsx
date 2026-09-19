import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4028-b3r.css';
import '../../css/t/t5s8-fwfl.css';
import '../../css/a/a6rpd8c1i.css';
import '../../css/d/dyerjlb6g.css';
import '../../css/b/bcl51zb1b.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4028-b3r"/><path class="t5s8-fwfl"/><path class="a6rpd8c1i"/><path class="dyerjlb6g"/><path class="bcl51zb1b"/>`,
		"fallback": "devicon:figma",
	});
}

export default Component;
