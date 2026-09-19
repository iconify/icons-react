import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2zts1b8r.css';
import '../../css/r/rqrh1564r.css';
import '../../css/g/gzm0_xb-h.css';
import '../../css/v/v05is1bov.css';
import '../../css/e/ev2wzjerc.css';
import '../../css/q/qa0kplb8m.css';
import '../../css/b/bwdpl5zyw.css';
import '../../css/m/mmovl7byp.css';
import '../../css/s/sax735c0r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2zts1b8r"/><circle class="rqrh1564r"/><circle class="gzm0_xb-h"/><path class="v05is1bov"/><path class="ev2wzjerc"/><path class="qa0kplb8m"/><circle class="bwdpl5zyw"/><circle class="mmovl7byp"/><path class="sax735c0r"/>`,
		"fallback": "flat-color-icons:alarm-clock",
	});
}

export default Component;
