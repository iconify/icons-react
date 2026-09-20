import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fglykybgg.css';
import '../../css/d/ds0cuq6_c.css';
import '../../css/o/owek2_9rb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fglykybgg"/><path class="ds0cuq6_c"/><path class="owek2_9rb"/>`,
		"fallback": "streamline-pixel:entertainment-events-hobbies-film-camrea",
	});
}

export default Component;
