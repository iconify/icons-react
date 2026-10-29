import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b1ckzpbsc.css';
import '../../css/g/gq4vx_bqt.css';
import '../../css/d/dlwidbcql.css';
import '../../css/s/sy0e_abrq.css';
import '../../css/e/eio_anrbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="b1ckzpbsc"/><path class="gq4vx_bqt wm-s"/><path class="dlwidbcql"/><path class="sy0e_abrq wm-a"/><path class="eio_anrbs"/></g>`,
		"fallback": "withicons:heater-duo",
	});
}

export default Component;
