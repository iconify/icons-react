import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q409n5tsy.css';
import '../../css/m/mi4ud5ykd.css';
import '../../css/l/lz8pembln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q409n5tsy"/><path class="mi4ud5ykd"/><path class="lz8pembln"/></g>`,
		"fallback": "tdesign:git-repository-private",
	});
}

export default Component;
