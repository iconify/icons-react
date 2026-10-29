import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knmkkbbxd.css';
import '../../css/y/yp1z57b0r.css';
import '../../css/c/cep230_ho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knmkkbbxd"/><path class="yp1z57b0r"/><path class="cep230_ho"/>`,
		"fallback": "withicons-bauhaus:droplet",
	});
}

export default Component;
