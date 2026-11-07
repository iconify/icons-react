import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4z1ldb0q.css';
import '../../css/o/oj6gwrmjs.css';
import '../../css/g/gvp-p5blk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v4z1ldb0q"/><path clip-rule="evenodd" class="oj6gwrmjs"/><path class="gvp-p5blk"/>`,
		"fallback": "solar:file-audio-bold-duotone",
	});
}

export default Component;
