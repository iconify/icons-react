import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/ljl6vmb9x.css';
import '../../css/x/xm56qfbnf.css';
import '../../css/u/uvat00bcy.css';
import '../../css/z/zjuanibik.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ljl6vmb9x"/><path class="xm56qfbnf"/><rect class="uvat00bcy"/><path class="zjuanibik"/></g>`,
		"fallback": "icon-park:email-lock",
	});
}

export default Component;
