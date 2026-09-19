import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpgikrbsr.css';
import '../../css/g/glc-ykbgi.css';
import '../../css/o/oehlnsb9i.css';
import '../../css/v/viqlb4bup.css';
import '../../css/w/woc15gb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="lpgikrbsr"/><rect transform="rotate(-90 5 18)" class="glc-ykbgi"/><rect transform="rotate(-90 19 18)" class="oehlnsb9i"/><path class="viqlb4bup"/><path class="woc15gb3w"/>`,
		"fallback": "eva:download-fill",
	});
}

export default Component;
