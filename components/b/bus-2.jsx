import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/hnmcryjii.css';
import '../../css/e/eqmg9ccuy.css';
import '../../css/g/gh4871b7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="hnmcryjii"/><path class="eqmg9ccuy"/><path class="gh4871b7w"/></g>`,
		"fallback": "streamline-cyber:bus-2",
	});
}

export default Component;
