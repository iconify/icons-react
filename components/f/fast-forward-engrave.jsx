import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/ju7jmubac.css';
import '../../css/i/ii_av5bob.css';
import '../../css/y/yr4wpd6ds.css';
import '../../css/o/o32on-b4u.css';
import '../../css/h/hx5d21bdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ju7jmubac wm-k"/><path class="ii_av5bob wm-a"/><path class="wm-shadow yr4wpd6ds"/><path class="o32on-b4u wm-a"/><path class="hx5d21bdd wm-k"/></g>`,
		"fallback": "withicons:fast-forward-engrave",
	});
}

export default Component;
