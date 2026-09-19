import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/soxy_db2v.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="soxy_db2v"/>`,
		"fallback": "fluent-mdl2:arrange-bring-to-front",
	});
}

export default Component;
