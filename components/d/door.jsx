import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj4wj9bms.css';
import '../../css/h/hogmvmngw.css';
import '../../css/w/w44vxc1es.css';
import '../../css/u/uwj8fab7c.css';
import '../../css/h/hztdh9b4i.css';
import '../../css/t/t9rqvnfmi.css';
import '../../css/c/c_0kqtr1q.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="fj4wj9bms"><path class="hogmvmngw"/><path class="w44vxc1es"/></g><path class="uwj8fab7c"/><ellipse class="hztdh9b4i"/><path class="t9rqvnfmi"/><path class="c_0kqtr1q"/>`,
		"fallback": "openmoji:door",
	});
}

export default Component;
