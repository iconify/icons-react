import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuv5y8b4m.css';
import '../../css/r/r-2vpkz6c.css';
import '../../css/x/xzic_p5kz.css';
import '../../css/g/gtgdvwp-e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuv5y8b4m"/><path class="r-2vpkz6c"/><path class="xzic_p5kz"/><path class="gtgdvwp-e"/>`,
		"fallback": "energy-icons:e-motorcycle-20-bold",
	});
}

export default Component;
