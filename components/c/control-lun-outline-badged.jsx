import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1-rs1b4l.css';
import '../../css/s/sga3esc_s.css';
import '../../css/y/y-1brd5iy.css';
import '../../css/l/lmf0ecbhq.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1-rs1b4l"/><path class="sga3esc_s"/><path class="y-1brd5iy"/><circle class="lmf0ecbhq"/>`,
		"fallback": "clarity:control-lun-outline-badged",
	});
}

export default Component;
