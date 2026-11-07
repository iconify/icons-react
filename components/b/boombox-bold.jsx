import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqtnv3iqd.css';
import '../../css/a/ayeh84bwp.css';
import '../../css/b/bcsn64b0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqtnv3iqd"/><path class="ayeh84bwp"/><path clip-rule="evenodd" class="bcsn64b0o"/>`,
		"fallback": "solar:boombox-bold",
	});
}

export default Component;
