import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p8ync5bkq.css';
import '../../css/d/dv36t7brb.css';
import '../../css/e/eetnx76oo.css';
import '../../css/v/vx5_jtbrv.css';
import '../../css/r/r725et1-d.css';
import '../../css/l/lhltwib-c.css';
import '../../css/f/fzi494txo.css';
import '../../css/k/kjyj4ubca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="p8ync5bkq wm-k"/><path class="dv36t7brb wm-k"/><path class="eetnx76oo wm-a"/><path class="vx5_jtbrv wm-s"/><path class="r725et1-d wm-shadow"/><path class="lhltwib-c wm-k"/><path class="fzi494txo wm-a"/><path class="kjyj4ubca wm-s"/></g>`,
		"fallback": "withicons:gavel-engrave",
	});
}

export default Component;
