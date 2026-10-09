import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhslc-sys.css';
import '../../css/b/be_b20boh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhslc-sys"/><path class="be_b20boh"/>`,
		"fallback": "energy-icons:fuel-rod-20",
	});
}

export default Component;
