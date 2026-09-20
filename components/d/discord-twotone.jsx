import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwfdgk.css';
import '../../css/y/ydovum.css';
import '../../css/a/a0m25c.css';
import '../../css/k/knqoax.css';
import '../../css/n/nl5zqf.css';
import '../../css/m/mgwdvu.css';
import '../../css/w/w58r8w.css';
import '../../css/j/jtgu8n.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-32.css';
import '../../css/s/so-to-0.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-1_5px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwfdgk ydovum"/><path class="a0m25c knqoax"/><path class="a0m25c nl5zqf"/><circle class="mgwdvu w58r8w ydovum"/><circle class="jtgu8n w58r8w ydovum"/>`,
		"fallback": "line-md:discord-twotone",
	});
}

export default Component;
