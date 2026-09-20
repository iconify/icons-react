import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv0mdubqx.css';
import '../../css/q/qgpj5zbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv0mdubqx"/><path class="qgpj5zbjv"/>`,
		"fallback": "octicon:agent-24",
	});
}

export default Component;
