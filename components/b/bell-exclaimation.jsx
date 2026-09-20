import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucyflh_rw.css';
import '../../css/h/hoos2y8tw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucyflh_rw"/><path class="hoos2y8tw"/>`,
		"fallback": "pixel:bell-exclaimation",
	});
}

export default Component;
