import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddphdubhq.css';
import '../../css/v/v_8_2yi8g.css';
import '../../css/b/b93e90bye.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddphdubhq"/><path class="v_8_2yi8g"/><path class="b93e90bye"/>`,
		"fallback": "carbon:drill-back",
	});
}

export default Component;
