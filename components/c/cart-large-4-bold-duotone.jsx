import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay399x7xk.css';
import '../../css/h/hcnrfbg9j.css';
import '../../css/f/fe6egccun.css';
import '../../css/a/a7402wb8m.css';
import '../../css/z/zo57iac0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay399x7xk"/><path class="hcnrfbg9j"/><path class="fe6egccun"/><path class="a7402wb8m"/><path class="zo57iac0k"/>`,
		"fallback": "solar:cart-large-4-bold-duotone",
	});
}

export default Component;
