import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iio2e3udq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iio2e3udq"/>`,
		"fallback": "pinhead:gasoline-pump-with-exclamation-point",
	});
}

export default Component;
