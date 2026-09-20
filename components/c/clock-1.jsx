import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/l6o9pl4ro.css';
import '../../css/u/u32la56ww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="l6o9pl4ro"/><path class="u32la56ww"/></g>`,
		"fallback": "streamline-cyber:clock-1",
	});
}

export default Component;
