import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xiu1hih7a.css';
import '../../css/c/cjifcyb7a.css';
import '../../css/p/pvmf4ib9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xiu1hih7a"/><path class="cjifcyb7a"/><path class="pvmf4ib9r"/>`,
		"fallback": "token:haka",
	});
}

export default Component;
