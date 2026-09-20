import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/k/knqoax.css';
import '../../css/n/nl5zqf.css';
import '../../css/m/mgwdvu.css';
import '../../css/s/s-756n.css';
import '../../css/j/jtgu8n.css';
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
		"content": `<path class="a0m25c knqoax"/><path class="a0m25c nl5zqf"/><circle class="mgwdvu s-756n"/><circle class="jtgu8n s-756n"/>`,
		"fallback": "line-md:discord",
	});
}

export default Component;
