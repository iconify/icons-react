import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjudu5_8t.css';
import '../../css/a/a5e9wp-or.css';
import '../../css/h/h7f8bvbnv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjudu5_8t"/><path class="a5e9wp-or"/><path class="h7f8bvbnv"/>`,
		"fallback": "energy-icons:chicken-leg-48-bold",
	});
}

export default Component;
