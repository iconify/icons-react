import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va6olmcmi.css';
import '../../css/b/bmgtl7fwm.css';
import '../../css/f/faiugbzlw.css';
import '../../css/b/b33s13b5v.css';
import '../../css/m/mr38h2bfd.css';
import '../../css/w/w_gb-j1ee.css';
import '../../css/e/e4gclq-jw.css';
import '../../css/r/r2mptzz_t.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va6olmcmi"/><path class="bmgtl7fwm"/><path class="faiugbzlw"/><path class="b33s13b5v"/><path class="mr38h2bfd"/><path class="w_gb-j1ee"/><path class="e4gclq-jw"/><path class="r2mptzz_t"/>`,
		"fallback": "iconito:coffee",
	});
}

export default Component;
