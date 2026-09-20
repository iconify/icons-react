import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkabidb8p.css';
import '../../css/m/m4ajnwsrg.css';
import '../../css/g/g1naa-mbk.css';
import '../../css/o/op11sfbxd.css';
import '../../css/w/ws3uwkhuu.css';
import '../../css/g/gffw1y0ha.css';
import '../../css/m/mdyh545gc.css';
import '../../css/o/ok1s7cbsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g><circle class="wkabidb8p"/><circle class="m4ajnwsrg"/><circle class="g1naa-mbk"/><circle class="op11sfbxd"/><circle class="ws3uwkhuu"/><circle class="gffw1y0ha"/><circle class="mdyh545gc"/><circle class="ok1s7cbsj"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></g>`,
		"fallback": "svg-spinners:8-dots-rotate",
	});
}

export default Component;
