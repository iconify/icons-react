import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b98g_82cf.css';
import '../../css/w/wg1zusbqd.css';
import '../../css/h/hko9syb3s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b98g_82cf"/><path class="wg1zusbqd"/><path class="hko9syb3s"/>`,
		"fallback": "energy-icons:biogas-digester-20-bold",
	});
}

export default Component;
