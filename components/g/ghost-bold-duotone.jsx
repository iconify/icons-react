import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpc_n_8lm.css';
import '../../css/g/go4rm8bar.css';
import '../../css/r/r2dvf4bly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpc_n_8lm"/><path class="go4rm8bar"/><path class="r2dvf4bly"/>`,
		"fallback": "solar:ghost-bold-duotone",
	});
}

export default Component;
