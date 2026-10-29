import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imnma-bab.css';
import '../../css/f/fju53jboa.css';
import '../../css/c/ck4f-q3mq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imnma-bab wm-k"/><path class="fju53jboa wm-a"/><path class="ck4f-q3mq wm-a"/>`,
		"fallback": "withicons-bauhaus:cookie",
	});
}

export default Component;
