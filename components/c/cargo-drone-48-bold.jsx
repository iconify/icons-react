import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgcx0hboz.css';
import '../../css/n/n4awmqm9i.css';
import '../../css/o/owsgh5_sx.css';
import '../../css/v/vlkisqbpc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgcx0hboz"/><path class="n4awmqm9i"/><path class="owsgh5_sx"/><path class="vlkisqbpc"/>`,
		"fallback": "energy-icons:cargo-drone-48-bold",
	});
}

export default Component;
