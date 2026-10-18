import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3hdfd1we.css';
import '../../css/s/s6ixhrb8c.css';
import '../../css/l/lz72tab4a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3hdfd1we"/><path class="s6ixhrb8c"/><path class="lz72tab4a"/>`,
		"fallback": "energy-icons:flue-20",
	});
}

export default Component;
