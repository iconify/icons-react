import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5pxau-ez.css';
import '../../css/c/c6jusnpnu.css';
import '../../css/z/z4wn6twxq.css';
import '../../css/r/rj54wxb9c.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/g/g3sj8mbxp.css';
import '../../css/p/pxoue4g9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5pxau-ez"/><path class="c6jusnpnu"/><path class="z4wn6twxq"/><path class="rj54wxb9c"/><g class="xtpeb-edw"><path class="g3sj8mbxp"/><path class="pxoue4g9a"/></g>`,
		"fallback": "solar:binoculars-bold-duotone",
	});
}

export default Component;
