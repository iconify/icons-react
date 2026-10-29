import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g217oqbyk.css';
import '../../css/w/wjvi4jyza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="g217oqbyk"/><path class="wjvi4jyza wm-a"/></g>`,
		"fallback": "withicons:beer-solid",
	});
}

export default Component;
