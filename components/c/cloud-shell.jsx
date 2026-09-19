import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac4r5ub6d.css';
import '../../css/l/lwgbjb0jl.css';
import '../../css/f/fjpj-53lj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac4r5ub6d"/><path class="lwgbjb0jl"/><path class="fjpj-53lj"/>`,
		"fallback": "gcp:cloud-shell",
	});
}

export default Component;
