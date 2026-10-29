import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eszi89bko.css';
import '../../css/b/b0_841bxc.css';
import '../../css/o/opz0lf9mp.css';
import '../../css/v/v4c15acmv.css';
import '../../css/k/ke596_bka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eszi89bko wm-a"/><path class="b0_841bxc wm-a"/><path class="opz0lf9mp wm-k"/><path class="v4c15acmv wm-a"/><path class="ke596_bka wm-k"/>`,
		"fallback": "withicons-bauhaus:bot",
	});
}

export default Component;
