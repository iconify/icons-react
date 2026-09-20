import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6iikjgcv.css';
import '../../css/s/s3zv3-bpt.css';
import '../../css/v/v6h86uwca.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/a/ah3c9_okn.css';
import '../../css/y/yeutc4gjt.css';
import '../../css/n/nuwng1blq.css';
import '../../css/y/y4k405lfg.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="s6iikjgcv"/><path class="s3zv3-bpt"/><path class="v6h86uwca"/><g class="ij2x_72vy"><path class="ah3c9_okn"/><path class="yeutc4gjt"/><path class="nuwng1blq"/><path class="y4k405lfg"/></g>`,
		"fallback": "openmoji:drooling-face",
	});
}

export default Component;
