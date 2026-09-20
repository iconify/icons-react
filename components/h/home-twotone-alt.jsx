import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vihsc6ehl.css';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mlj47pbrn.css';
import '../../css/c/c8b5gec6u.css';
import '../../css/e/etk9i-wxy.css';
import '../../css/u/u_vx9abup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path fill-opacity="0" class="vihsc6ehl"><animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.15s" to=".3"/></path><g class="nrj6p8qat"><path class="mlj47pbrn"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="18;0"/></path><path stroke-dashoffset="16" class="c8b5gec6u"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" to="0"/></path><path stroke-dashoffset="28" class="etk9i-wxy"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.4s" to="0"/></path><path stroke-dashoffset="26" class="u_vx9abup"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.6s" to="0"/></path></g>`,
		"fallback": "line-md:home-twotone-alt",
	});
}

export default Component;
