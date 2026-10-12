import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oidghubzp.css';
import '../../css/c/cvjvrzlib.css';
import '../../css/z/zscc4vb3e.css';
import '../../css/g/gvrjuabrt.css';
import '../../css/b/bfxfvsb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(15 3.47 2.77)" class="oidghubzp"/><rect transform="rotate(15 3.47 2.77)" class="cvjvrzlib"/><path class="zscc4vb3e"/><path class="gvrjuabrt"/><path class="bfxfvsb6g"/></g>`,
		"fallback": "andrsrxn:cctv-off",
	});
}

export default Component;
