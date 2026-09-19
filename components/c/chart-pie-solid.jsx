import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drr_rdr2u.css';
import '../../css/j/jw6etd-fn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drr_rdr2u"/><path class="jw6etd-fn"/>`,
		"fallback": "basil:chart-pie-solid",
	});
}

export default Component;
