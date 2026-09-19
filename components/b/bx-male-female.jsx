import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sllo7vb2i.css';
import '../../css/n/n90dm-bwt.css';
import '../../css/a/aovzl8biz.css';
import '../../css/f/ff8n8ucqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="sllo7vb2i"/><path class="n90dm-bwt"/><circle class="aovzl8biz"/><path class="ff8n8ucqm"/>`,
		"fallback": "bx:bx-male-female",
	});
}

export default Component;
