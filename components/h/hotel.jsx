import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbr10cbls.css';
import '../../css/p/p1s_b1bnt.css';
import '../../css/f/fumefdsvh.css';
import '../../css/w/wmpwg_b2d.css';
import '../../css/e/e7p7esbpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbr10cbls wm-a"/><path class="p1s_b1bnt wm-a"/><path class="fumefdsvh wm-a"/><path class="wm-k wmpwg_b2d"/><path class="e7p7esbpd wm-k"/>`,
		"fallback": "withicons-bauhaus:hotel",
	});
}

export default Component;
