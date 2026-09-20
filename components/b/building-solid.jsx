import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n89zesbhu.css';
import '../../css/p/pgc70abwx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n89zesbhu"/><path class="pgc70abwx"/>`,
		"fallback": "teenyicons:building-solid",
	});
}

export default Component;
