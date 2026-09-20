import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1fmkgb8a.css';
import '../../css/h/hpilvzbch.css';
import '../../css/s/sb7j3xbhz.css';
import '../../css/l/lxkefdb7m.css';
import '../../css/o/os4jquter.css';
import '../../css/h/ht0bfgbtv.css';
import '../../css/o/oar4g3b_o.css';
import '../../css/d/d9shv92nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1fmkgb8a"/><circle class="hpilvzbch"/><circle class="sb7j3xbhz"/><circle class="lxkefdb7m"/><circle class="os4jquter"/><circle class="ht0bfgbtv"/><circle class="oar4g3b_o"/><circle class="d9shv92nj"/>`,
		"fallback": "uim:border-alt",
	});
}

export default Component;
