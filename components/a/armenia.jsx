import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufvrkebxw.css';
import '../../css/o/owp3yfbrj.css';
import '../../css/v/v4iawlr0q.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufvrkebxw"/><path class="owp3yfbrj"/><path class="v4iawlr0q"/>`,
		"fallback": "tabler-flags:armenia",
	});
}

export default Component;
