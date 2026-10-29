import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fio839f8b.css';
import '../../css/t/t0ylnq39z.css';
import '../../css/i/izxst9d8w.css';
import '../../css/g/govvadqsn.css';
import '../../css/t/tt0w_4bls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fio839f8b"/><path class="t0ylnq39z wm-k"/><path class="izxst9d8w wm-a"/><path class="govvadqsn wm-k"/><path class="tt0w_4bls wm-a"/></g>`,
		"fallback": "withicons:heart-balloon-sketch",
	});
}

export default Component;
