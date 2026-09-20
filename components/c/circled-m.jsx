import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at5new48p.css';
import '../../css/s/sxsjrzbyv.css';
import '../../css/g/gpvjwxk6r.css';
import '../../css/x/xxvql1bwp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle transform="translate(46.558 26.92)scale(3.04614)" class="at5new48p"/><g transform="translate(-3.216 -3.216)scale(1.09)" class="sxsjrzbyv"><path class="gpvjwxk6r"/><circle transform="translate(45.78 27.64)scale(2.795)" class="xxvql1bwp"/></g>`,
		"fallback": "openmoji:circled-m",
	});
}

export default Component;
