import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqbkv8u2i.css';
import '../../css/z/ze9xnfzdp.css';
import '../../css/q/q26grc28u.css';
import '../../css/f/fmu3bk6pi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqbkv8u2i"/><circle class="ze9xnfzdp"/><circle class="q26grc28u"/><path class="fmu3bk6pi"/>`,
		"fallback": "bx:bx-sad",
	});
}

export default Component;
