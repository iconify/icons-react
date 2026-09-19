import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/o/oa5j-48mv.css';
import '../../css/j/jhl2qpj5j.css';
import '../../css/g/gp6kkrbtf.css';
import '../../css/k/kp5qh9bof.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect class="oa5j-48mv"/><path class="jhl2qpj5j"/><path class="gp6kkrbtf"/><rect class="kp5qh9bof"/></g>`,
		"fallback": "icon-park:conditioner",
	});
}

export default Component;
