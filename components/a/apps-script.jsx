import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmpuuq6uh.css';
import '../../css/t/tq81vbcsk.css';
import '../../css/m/mhz4m5u4t.css';
import '../../css/w/wtlifrzdw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmpuuq6uh"/><path class="tq81vbcsk"/><path class="mhz4m5u4t"/><path class="wtlifrzdw"/>`,
		"fallback": "material-icon-theme:apps-script",
	});
}

export default Component;
