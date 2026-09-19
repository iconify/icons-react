import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szd676lcr.css';
import '../../css/m/mgm68nbdh.css';
import '../../css/t/tg78mwbgu.css';
import '../../css/j/j4bam6bye.css';
import '../../css/m/mw25ogbwg.css';
import '../../css/s/slx8bnllt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szd676lcr"/><path class="mgm68nbdh"/><path class="tg78mwbgu"/><path class="j4bam6bye"/><path class="mw25ogbwg"/><path class="slx8bnllt"/>`,
		"fallback": "gcp:cloud-endpoints",
	});
}

export default Component;
