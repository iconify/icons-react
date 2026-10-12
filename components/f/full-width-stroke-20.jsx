import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdp3vsbnw.css';
import '../../css/a/aqnztv02g.css';
import '../../css/p/pur2tt30n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdp3vsbnw"/><path class="aqnztv02g"/><path class="pur2tt30n"/>`,
		"fallback": "garden:full-width-stroke-20",
	});
}

export default Component;
