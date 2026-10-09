import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uylz7k5ss.css';
import '../../css/z/zcpwqnoiq.css';
import '../../css/k/kbxte_ofq.css';
import '../../css/s/so0vyibjm.css';
import '../../css/k/kq54q_mam.css';
import '../../css/r/rabxu4fej.css';
import '../../css/m/m6kff7b1i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uylz7k5ss"/><path class="zcpwqnoiq"/><path class="kbxte_ofq"/><path class="so0vyibjm"/><path class="kq54q_mam"/><path class="rabxu4fej"/><path class="m6kff7b1i"/>`,
		"fallback": "energy-icons:heat-pump-air-20-bold",
	});
}

export default Component;
