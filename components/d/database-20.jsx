import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_na6f67p.css';
import '../../css/b/ba7omlb3c.css';
import '../../css/a/apo2ptbjb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_na6f67p"/><path class="ba7omlb3c"/><path class="apo2ptbjb"/>`,
		"fallback": "energy-icons:database-20",
	});
}

export default Component;
