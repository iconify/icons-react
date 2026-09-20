import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfk_7v6jd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfk_7v6jd"/>`,
		"fallback": "pinhead:globe-gasoline-pump-with-droplet",
	});
}

export default Component;
