import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa96asbwu.css';
import '../../css/n/nt80sb9do.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa96asbwu"/><path clip-rule="evenodd" class="nt80sb9do"/>`,
		"fallback": "basil:globe-solid",
	});
}

export default Component;
