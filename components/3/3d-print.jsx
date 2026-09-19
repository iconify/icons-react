import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk14lcqmb.css';
import '../../css/y/ykaofac9m.css';
import '../../css/k/kdnfubntr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tk14lcqmb"/><path class="ykaofac9m"/><path clip-rule="evenodd" class="kdnfubntr"/>`,
		"fallback": "eos-icons:3d-print",
	});
}

export default Component;
