import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt7_occ3g.css';
import '../../css/p/ph8ih3b4y.css';
import '../../css/o/o-o24gfbk.css';
import '../../css/g/g8yqfub-f.css';
import '../../css/z/z9lntgbug.css';
import '../../css/m/mcsn5bc8q.css';
import '../../css/o/ohomrebop.css';
import '../../css/y/y13yzsxij.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt7_occ3g"/><path class="ph8ih3b4y"/><path class="o-o24gfbk"/><path class="g8yqfub-f"/><path class="z9lntgbug"/><path class="mcsn5bc8q"/><path class="ohomrebop"/><path class="y13yzsxij"/>`,
		"fallback": "fxemoji:ferriswheel",
	});
}

export default Component;
