import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9faqobgu.css';
import '../../css/b/b-yzg1r4w.css';
import '../../css/h/hnipxac-p.css';
import '../../css/h/h6as5h2ht.css';
import '../../css/m/mpnwbubfi.css';
import '../../css/k/kt_bebcoi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9faqobgu"/><path class="b-yzg1r4w"/><path class="hnipxac-p"/><path class="h6as5h2ht"/><path class="mpnwbubfi"/><path class="kt_bebcoi"/>`,
		"fallback": "energy-icons:bicycle-48",
	});
}

export default Component;
