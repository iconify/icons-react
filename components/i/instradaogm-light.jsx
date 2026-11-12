import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igi5jejqs.css';
import '../../css/p/pg_epbcjs.css';
import '../../css/d/d978pz0hn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igi5jejqs"/><path class="pg_epbcjs"/><path class="d978pz0hn"/>`,
		"fallback": "selfhst:instradaogm-light",
	});
}

export default Component;
