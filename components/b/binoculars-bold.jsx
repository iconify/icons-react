import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muwknjt7p.css';
import '../../css/b/b5jplqbkn.css';
import '../../css/b/bnrsc3bjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muwknjt7p"/><path class="b5jplqbkn"/><path clip-rule="evenodd" class="bnrsc3bjp"/>`,
		"fallback": "solar:binoculars-bold",
	});
}

export default Component;
