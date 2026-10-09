import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yocctqbef.css';
import '../../css/r/renkk5ypo.css';
import '../../css/y/yepqybc2a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yocctqbef"/><path class="renkk5ypo"/><path class="yepqybc2a"/>`,
		"fallback": "energy-icons:coffee-machine-20-bold",
	});
}

export default Component;
