import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iycln-b8i.css';
import '../../css/u/ubauqy9wp.css';
import '../../css/c/cudjf8a_r.css';
import '../../css/z/zdzon5lta.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="iycln-b8i"/><path class="ubauqy9wp"/><path class="cudjf8a_r"/><path class="zdzon5lta"/>`,
		"fallback": "selfhst:apache-guacamole",
	});
}

export default Component;
