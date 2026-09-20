import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/xglklabzt.css';
import '../../css/g/gp0egaclj.css';
import '../../css/x/xkqp3mu4p.css';
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
		"content": `<g class="h01tyzbfu"><circle class="xglklabzt"/><circle class="gp0egaclj"/><path class="xkqp3mu4p"/><circle class="uv1vhux9m"/><circle class="omj-zju2r"/><circle class="chb1o4b7j"/></g>`,
		"fallback": "lets-icons:fat-light",
	});
}

export default Component;
