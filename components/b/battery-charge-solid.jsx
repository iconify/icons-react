import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yydbcv1gz.css';
import '../../css/x/xxvlnybzz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yydbcv1gz"/><path class="xxvlnybzz"/>`,
		"fallback": "teenyicons:battery-charge-solid",
	});
}

export default Component;
