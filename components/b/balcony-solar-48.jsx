import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1a1zablq.css';
import '../../css/v/vemvzkbny.css';
import '../../css/w/wp-hopvzx.css';
import '../../css/r/rduqfkbgk.css';
import '../../css/g/gw2gv9b3o.css';
import '../../css/c/c65-ehvfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1a1zablq"/><path class="vemvzkbny"/><path class="wp-hopvzx"/><path class="rduqfkbgk"/><path class="gw2gv9b3o"/><path class="c65-ehvfy"/>`,
		"fallback": "energy-icons:balcony-solar-48",
	});
}

export default Component;
