import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye7a0cc3i.css';
import '../../css/l/leeyffb0z.css';
import '../../css/f/f6ccjno1g.css';
import '../../css/m/mvlcevogs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye7a0cc3i"/><path class="leeyffb0z"/><circle class="f6ccjno1g"/><path class="mvlcevogs"/>`,
		"fallback": "bx:cast",
	});
}

export default Component;
