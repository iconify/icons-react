import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1qhirzjm.css';
import '../../css/g/gxn3sqbis.css';
import '../../css/b/b6hcl2bem.css';
import '../../css/s/sxlyg7bpw.css';
import '../../css/k/kvdyyd79v.css';
import '../../css/h/hv6i9sbii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1qhirzjm"/><path class="gxn3sqbis"/><path class="b6hcl2bem"/><path class="sxlyg7bpw"/><path class="kvdyyd79v"/><path class="hv6i9sbii"/>`,
		"fallback": "solar:grip-vertical-outline",
	});
}

export default Component;
