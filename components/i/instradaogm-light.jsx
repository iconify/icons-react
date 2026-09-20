import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyezo-ikf.css';
import '../../css/h/hw02_8bnp.css';
import '../../css/d/d978pz0hn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyezo-ikf"/><path class="hw02_8bnp"/><path class="d978pz0hn"/>`,
		"fallback": "selfhst:instradaogm-light",
	});
}

export default Component;
