import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihmh29bqx.css';
import '../../css/l/lhghp8bem.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihmh29bqx"/><path clip-rule="evenodd" class="lhghp8bem"/>`,
		"fallback": "heroicons:calendar-date-range-16-solid",
	});
}

export default Component;
