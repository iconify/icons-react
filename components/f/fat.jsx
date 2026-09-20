import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/a6z4ynb6v.css';
import '../../css/j/jn-wlcb6l.css';
import '../../css/g/g1_-ymjuz.css';
import '../../css/u/uv1vhux9m.css';
import '../../css/o/omj-zju2r.css';
import '../../css/c/chb1o4b7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="a6z4ynb6v"/><circle class="jn-wlcb6l"/><path class="g1_-ymjuz"/><circle class="uv1vhux9m"/><circle class="omj-zju2r"/><circle class="chb1o4b7j"/></g>`,
		"fallback": "lets-icons:fat",
	});
}

export default Component;
